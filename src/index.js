// import { nanoid } from "nanoid";
// const id = nanoid(5);
// console.log(id);

// import { customAlphabet} from "nanoid";
// const al = 'abc123';
// const id = customAlphabet(al, 10);
// const idC = id();
// console.log(idC);

// import { success, notice,info, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
// import '@pnotify/core/dist/BrightTheme.css';
// defaultModules.set(PNotifyMobile, {});
// // alert({
// //     text: 'Hello World :DDD'
// // });

// const mysuccess = success({
//     text: 'Sucess bro xd'
// });
// const mynotice = notice({
//   text: 'your notice bro xd'
// });
// const myinfo = info({
//   text: 'Main info bro xd'
// });
// const myerror = error({
//     text: 'Any troubles, bro xd?',
//     dalay: 3000
// });

// --------------------------

// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);
// const date = {
//     labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', ' sep', 'oct', 'nov', 'dec'],
//     datasets: [{
//         label: 'temp',
//         data: [15, 14, 16, 18, 19, 20, 26, 27, 30, 20, 11, 12],
//         fill: false,
//         borderColor: 'red',
//         tension: 0.1
//     }]
// }
// const config = {
//     type: 'line',
//     data: date,
//     options: {
//     }
// }
// document.addEventListener('DOMContentLoaded', () => {
//     const a = document.getElementById('myChart').getContext('2d');
//     new Chart(a, config);

// });

//-------------------------------------

// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';
// const img =
//   '<img src="https://images.pexels.com/photos/16330147/pexels-photo-16330147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" width="500">';
// const show = basicLightbox.create(img);

// document.getElementById('openModal').addEventListener('click', () => {
//   show.show();
// });
