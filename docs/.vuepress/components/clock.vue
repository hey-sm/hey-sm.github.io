<template>
	<div class="container">
		<div class="clock_box" @click="launchIntoFullscreen">
			<div class="clock">
				<p>{{ time }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const time = ref('');

const updateTime = () => {
	const date = new Date();
	let h = date.getHours();
	let m = date.getMinutes();
	let s = date.getSeconds();
	let day_night = 'AM';

	if (h > 12) {
		h -= 12;
		day_night = 'PM';
	}

	if (h < 10) {
		h = '0' + h;
	}
	if (m < 10) {
		m = '0' + m;
	}
	if (s < 10) {
		s = '0' + s;
	}

	time.value = `${h}:${m}:${s} ${day_night}`;
};

let intervalId;
onMounted(() => {
	updateTime();
	intervalId = setInterval(updateTime, 1000);
});

onUnmounted(() => {
	clearInterval(intervalId);
});

const launchIntoFullscreen = () => {
	const element = document.documentElement;
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullscreen) {
		element.webkitRequestFullscreen();
	} else if (element.msRequestFullscreen) {
		element.msRequestFullscreen();
	}
};
</script>

<style scoped>
.container {
	width: 100vw;
	height: 100vh;
	background-color: #000;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Montserrat', sans-serif, Arial, 'Microsoft Yahei';
}

.clock_box {
	position: relative;
	width: 380px;
	height: 80px;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: animate 4s linear infinite;
}

.clock_box::after,
.clock_box::before {
	position: absolute;
	content: '';
	width: 100%;
	height: 100%;
	z-index: -1;
	border-radius: 10px;
	filter: blur(15px);
}

.clock_box::before {
	filter: blur(100px);
}

.clock {
	position: absolute;
	left: 10px;
	right: 10px;
	top: 10px;
	bottom: 10px;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.clock p {
	font-size: 50px;
	font-weight: bold;
	color: transparent;
	letter-spacing: 2px;
	background-image: linear-gradient(135deg, #56d5fc, #def700, #fa3195);
	background-clip: text;
	-webkit-background-clip: text;
}

@keyframes animate {
	100% {
		filter: hue-rotate(360deg);
	}
}
</style>
