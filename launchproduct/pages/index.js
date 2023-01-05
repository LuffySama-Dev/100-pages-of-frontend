import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import earth from '../public/assets/earth.png';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-black text-[#818487] min-h-screen">
          <div className="container mx-auto">
            <div>
              <nav className="flex flex-row justify-between pt-10">
                <div className="cursor-pointer">
                  <svg
                    width="66"
                    height="62"
                    viewBox="0 0 66 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M51.1968 61.451C60.1173 55.4543 66 45.1745 66 33.5C66 14.9985 51.2254 0 33 0C14.7746 0 0 14.9985 0 33.5C0 45.1745 5.88273 55.4543 14.8032 61.451L33 34L51.1968 61.451Z"
                      fill="url(#paint0_linear_8_9)"
                      fill-opacity="0.56"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_8_9"
                        x1="33"
                        y1="0"
                        x2="30.9823"
                        y2="66.1627"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#D03C1E" />
                        <stop offset="1" stop-color="#1052B1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-row justify-center items-center gap-[100px] text-xl">
                  <h1 className="hover:text-white hover:cursor-pointer hover:underline">
                    How it works
                  </h1>
                  <h1 className="hover:text-white hover:cursor-pointer hover:underline">
                    Pricing
                  </h1>
                  <h1 className="hover:text-white hover:cursor-pointer hover:underline">
                    Help
                  </h1>
                  <h1 className="hover:text-white hover:cursor-pointer hover:underline">
                    Login
                  </h1>
                  <button className="bg-[#279DE0] rounded-lg text-white px-4 p-1 hover:scale-105">
                    Sign up
                  </button>
                </div>
              </nav>
            </div>
            <div className="grid grid-cols-2">
              <div className="pt-[180px]">
                <h1 className="text-7xl font-bold text-white">
                  Launch your best product through the Metaverse.
                </h1>
                <div className="max-w-[400px]">
                  <p className="pt-4 text-lg text-white text-left">
                    We provide the best service for your company product in the
                    real world
                  </p>
                </div>
                <div className="flex felx-row items-center mt-6 gap-8">
                  <div>
                    <button className="bg-[#3880D0] text-white px-6 py-4 rounded-xl hover:scale-105">
                      Get Started
                    </button>
                  </div>
                  <div className="text-white flex justify-center items-center hover:cursor-pointer hover:scale-105">
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="21" cy="21" r="20.5" stroke="#3880D0" />
                      <path
                        d="M30.0224 21L16.5419 29.6905L16.503 12.37L30.0224 21Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                    <h1 className="ml-4 text-white font-semibold">Play Demo</h1>
                  </div>
                </div>
                <div className="mt-10">
                  <h1 className="text-lg font-semibold">
                    Brands that trusts us
                  </h1>
                  <div className="flex flex-row gap-8 mt-6 hover:cursor-pointer">
                    <svg
                      width="86"
                      height="34"
                      viewBox="0 0 86 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 22H0V25H6V22Z"
                        fill="#79797A"
                        fill-opacity="0.45"
                      />
                      <path
                        d="M15 22H9V25H15V22Z"
                        fill="#79797A"
                        fill-opacity="0.45"
                      />
                      <path
                        d="M15 17H0V20H15V17Z"
                        fill="#79797A"
                        fill-opacity="0.45"
                      />
                      <path
                        d="M9 12H0V15H9V12Z"
                        fill="#79797A"
                        fill-opacity="0.45"
                      />
                      <path
                        d="M15 12H12V15H15V12Z"
                        fill="#79797A"
                        fill-opacity="0.45"
                      />
                      <path
                        d="M57 12C52.3377 12 50 14.5856 50 18C50 21.4145 52.2783 25 57 25C61.7217 25 64 21.4145 64 18C64.0002 14.5856 61.6622 12 57 12ZM60 18C59.9967 20.1956 59.6427 22 57 22C54.3573 22 53.0027 20.1958 53 18C53.0027 15.8045 54.3573 14 57 14C59.6425 14 59.9967 15.8045 60 18C60 17.9982 60 18.0019 60 18Z"
                        fill="#79797A"
                        fill-opacity="0.45"
                      />
                      <path
                        d="M36 25V7.00001C36 7.00001 38.7918 7.02353 39 7.00001C39.2359 6.97326 39 6.72127 39 7.00001V14C39.5573 13.5552 40.3312 13.2732 41 13C41.6694 12.7271 42.0982 12 43 12C43.7807 12 45.396 12.7775 46 13C46.6044 13.222 46.5958 13.5986 47 14C47.4042 14.4021 47.7909 14.4422 48 15C48.209 15.5578 48 16.3291 48 17V25H45V17C45 16.2668 44.4042 15.4021 44 15C43.5956 14.5984 42.8087 15 42 15C41.4053 15 41.5201 14.7735 41 15C40.4793 15.2263 39.4646 15.6097 39 16V25H36Z"
                        fill="#79797A"
                        fill-opacity="0.45"
                      />
                      <path
                        d="M82 25C79.6307 25 78 23.1595 78 21V15H75C75 15 75.9551 13.1298 76 13C76.0451 12.8704 75.7643 13.0275 76 13C76.2357 12.9725 78 13 78 13L79 9.00001C79 9.00001 80.6943 9.03829 81 9.00001C81.2886 8.96373 81 8.73603 81 9.00001V13H85V15H81V21C81 21.8621 82.4008 22 83 22C83.3663 22 83.6257 22.1458 84 22C84.2313 21.9102 83.9073 21.729 84 22C84.0819 22.2402 85 24 85 24C84.6244 24.2036 83.686 25 82 25Z"
                        fill="#79797A"
                        fill-opacity="0.45"
                      />
                      <path
                        d="M73 15C72.329 14.8171 71.1997 14 70 14C68.7775 14 68 15.1467 68 16C68 17.0658 70.581 17.5655 72 18C72.9487 18.2904 75 18.7031 75 21C75 23.7902 71.9443 25 69 25C66.0553 25 65 24 65 24C65 24 64.9075 22.2674 65 22C65.0837 21.7594 65.7877 21.9316 66 22C66.7578 22.2452 67.4532 22 69 22C70.566 22 72 21.8558 72 21C72 19.8611 69.3986 19.3704 68 19C67.0365 18.7451 65 18.5262 65 16C65 13.5115 67.2181 12 70 12C72.3548 12 74.1372 12.631 75 13C75 13 74.0714 14.7905 74 15C73.9158 15.2491 73.3051 15.083 73 15Z"
                        fill="#79797A"
                        fill-opacity="0.45"
                      />
                      <path
                        d="M34 13C34 12.7308 34.2613 11.975 34 12C32.8446 12.1112 31.5333 12.5751 31 13C29.9528 12.3112 28.6314 12 27 12C23.7291 12 21 14.1102 21 17C21 18.6589 22.6642 19.3271 24 20C23.0079 20.3942 22 21.1776 22 22C22 23.3757 23 24 23 24C23 24 21 25.1548 21 27C21 29.3621 23.8359 30 27 30C31.5609 30 34 27.9038 34 25C34 23.2129 32.55 23.1173 29 23C26.8934 22.9302 25.3381 22.0939 25 22C24.5533 21.8755 25 22.3315 25 22C25 21.6341 25.4356 21.2392 26 21C26.4923 21.0732 26.4605 21 27 21C30.2736 21 33 19.8936 33 17C33 16.2983 33.2743 15.5204 33 15C33.4809 14.7846 33.2935 14 34 14C34 14 34 13.2455 34 13ZM25 25C25 25 27.2836 24.9333 29 25C30.9283 25.0749 31 25.1618 31 26C31 27.0241 29.3418 28 27 28C24.7771 28 24 27.081 24 26C24 25.3798 24.0024 25.3592 25 25ZM27 19C25.4505 19 25 18.5072 25 17C25 15.4927 25.4516 14 27 14C28.5486 14 30 15.4909 30 17C30 18.5092 28.5501 19 27 19Z"
                        fill="#79797A"
                        fill-opacity="0.45"
                      />
                    </svg>

                    <svg
                      width="86"
                      height="34"
                      viewBox="0 0 86 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_15_559)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M53 27C48.1024 30.25 40.1119 32 34 32C25.4302 32 17.8367 28.7462 12 24C11.5414 23.6268 12.4497 23.7093 13 24C19.299 27.2995 26.9548 29 35 29C40.4258 29 46.5118 28.0973 52 26C52.8291 25.6829 53.8108 26.4583 53 27Z"
                          fill="#79797A"
                          fill-opacity="0.45"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M55 25C54.3763 24.28 50.5775 24.8315 49 25C48.5194 25.0528 48.5671 24.2708 49 24C51.7991 22.2264 56.4644 23.4055 57 24C57.5356 24.5978 56.6304 28.0216 54 30C53.5965 30.3038 52.8202 30.4029 53 30C53.5906 28.6722 55.6273 25.7233 55 25Z"
                          fill="#79797A"
                          fill-opacity="0.45"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M50 12V10C50 9.73126 49.7305 9 50 9H59C59.2807 9 59 9.73466 59 10V11C58.9962 11.2551 59.4193 11.4727 59 12L54 18C55.6845 17.9626 57.4727 18.2176 59 19C59.3444 19.1769 59.9738 19.7449 60 20V22C60 22.2585 59.3294 22.1565 59 22C56.3085 20.7175 52.976 20.5645 50 22C49.6968 22.1497 49 22.2585 49 22V20C49 19.7109 49.6818 19.4388 50 19L55 12H50C50 12.2653 49.7192 12 50 12Z"
                          fill="#79797A"
                          fill-opacity="0.45"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18 23H15C14.7454 22.983 15.0187 22.2211 15 22V10C15 9.75167 14.7155 9 15 9H18C18.2583 9.0102 17.9813 9.77548 18 10V11C18.6476 9.43179 20.3604 9 22 9C23.6658 9 24.2513 9.43179 25 11C25.6439 9.43179 27.4315 9 29 9C30.1155 9 31.2551 9.06111 32 10C32.8423 11.0443 33 12.6699 33 14V22C33 22.2483 32.2845 23 32 23H29C28.7342 22.983 29 22.2381 29 22V16C29 15.4761 29.1273 13.4967 29 13C28.8016 12.1666 27.7711 12 27 12C26.3561 12 26.2733 12.3741 26 13C25.7267 13.6259 25 15.2958 25 16V22C25 22.2483 25.2845 23 25 23H22C21.7305 22.983 22 22.2381 22 22V16C22 14.6155 21.8904 12 20 12C18.0871 12 18 14.5645 18 16V22C18 22.2483 18.2845 23 18 23Z"
                          fill="#79797A"
                          fill-opacity="0.45"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M67 9C70.9493 9 73 12.0812 73 16C73 19.7862 70.7247 23 67 23C63.1218 23 61 19.8406 61 16C61 12.1356 63.148 9 67 9ZM67 12C65.0385 12 65 14.4862 65 16C65 17.5172 64.9112 20 67 20C69.0626 20 69 17.592 69 16C69 14.9523 69.3481 13.9933 69 13C68.7005 12.136 67.846 12 67 12Z"
                          fill="#79797A"
                          fill-opacity="0.45"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M78 23H76C75.7342 22.983 75 22.2381 75 22V10C75.0224 9.77208 75.7305 9 76 9H78C78.2321 9.0102 78.9476 9.8061 79 10V12C79.7449 10.3025 80.162 9 82 9C83.1941 9 84.2513 9.92845 85 11C85.6963 11.9933 86 12.7992 86 14V22C85.97 22.2177 85.262 23 85 23H83C82.7567 22.983 82.0262 22.2109 82 22V16C82 14.6427 82.838 12 81 12C80.3524 12 79.2957 12.4013 79 13C78.6256 13.7586 79 15.1632 79 16V22C78.9962 22.2483 78.2845 23 78 23Z"
                          fill="#79797A"
                          fill-opacity="0.45"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M43 17C43 17.9423 42.5241 18.1632 42 19C41.577 19.6804 40.7449 20 40 20C38.978 20 39 20.0443 39 19C39 16.9385 41.0721 16 43 16V17ZM45 23C44.8241 23.1429 45.1984 23.0952 45 23C44.1165 22.3333 43.4829 21.6361 43 21C41.5401 22.3539 40.8904 23 39 23C36.7577 23 35 21.5139 35 19C35 17.0372 36.3304 15.6531 38 15C39.4449 14.4217 41.4577 14.1599 43 14C43 13.4251 42.3743 12.4967 42 12C41.6781 11.5544 41.5503 12 41 12C39.9855 12 39.2209 12.0203 39 13C38.9551 13.2177 38.2433 12.9898 38 13H36C35.7829 12.9558 34.9364 13.3028 35 13C35.5914 10.1561 38.4695 9 41 9C42.2952 9 43.978 9.10874 45 10C46.2952 11.0988 46 12.4046 46 14V18C46 19.1328 46.5133 19.3877 47 20C47.1684 20.2177 47.2171 20.8367 47 21C46.4572 21.4116 45.5315 22.5714 45 23Z"
                          fill="#79797A"
                          fill-opacity="0.45"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.99999 17C7.99999 17.9423 7.52406 18.1632 6.99999 19C6.57698 19.6804 6.74866 20 5.99999 20C4.97804 20 3.99999 20.0443 3.99999 19C3.99999 16.9385 6.07588 16 7.99999 16V17ZM11 23C10.824 23.1429 10.1984 23.0952 9.99999 23C9.11655 22.3333 8.48663 21.6361 7.99999 21C6.54007 22.3539 5.89414 23 3.99999 23C1.76144 23 -1.28665e-05 21.5139 -1.28665e-05 19C-1.28665e-05 17.0372 1.33418 15.6531 2.99999 15C4.44493 14.4217 6.45771 14.1599 7.99999 14C7.99999 13.4251 8.37058 12.4967 7.99999 12C7.67431 11.5544 6.54652 12 5.99999 12C4.98553 12 4.22085 12.0203 3.99999 13C3.95507 13.2177 3.23956 12.9898 2.99999 13H0.999987C0.78287 12.9558 -0.0599072 13.3028 -1.28665e-05 13C0.595186 10.1561 3.46945 9 5.99999 9C7.2952 9 8.97804 9.10874 9.99999 10C11.2952 11.0988 12 12.4046 12 14V18C12 19.1328 12.5133 19.3877 13 20C13.1722 20.2177 13.2171 20.8367 13 21C12.4572 21.4116 11.5316 22.5714 11 23Z"
                          fill="#79797A"
                          fill-opacity="0.45"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_15_559">
                          <rect width="86" height="34" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <svg
                      width="86"
                      height="34"
                      viewBox="0 0 86 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.955 22.9687L27.9985 20.538C29.141 21.3813 30.6311 21.8276 32.1217 21.8276C33.2147 21.8276 33.9101 21.4061 33.9101 20.7614C33.8851 18.9755 27.3276 20.3644 27.2778 15.8746C27.2528 13.5927 29.2899 11.8317 32.1716 11.8317C33.8851 11.8317 35.5994 12.2535 36.8164 13.221L35.8413 15.7034C34.7216 14.9859 33.3386 14.4856 32.0223 14.4856C31.1281 14.4856 30.5318 14.9071 30.5318 15.4531C30.5567 17.2141 37.1644 16.2467 37.2389 20.538C37.2389 22.8696 35.2513 24.5067 32.4195 24.5067C30.3333 24.5067 28.4206 24.0107 26.9547 22.9687H26.955ZM68.5037 19.6579C68.2403 20.1243 67.8572 20.5125 67.3936 20.7826C66.93 21.0528 66.4027 21.1952 65.8657 21.1952C64.192 21.1952 62.8354 19.8404 62.8354 18.1692C62.8354 16.498 64.192 15.1432 65.8657 15.1432C66.4027 15.1432 66.93 15.2856 67.3936 15.5558C67.8572 15.8259 68.2403 16.2141 68.5037 16.6805L71.4046 15.0757C70.3181 13.1404 68.2454 11.8317 65.8657 11.8317C62.3605 11.8317 59.5191 14.6689 59.5191 18.1692C59.5191 21.6692 62.3605 24.5067 65.8657 24.5067C68.2454 24.5067 70.3181 23.198 71.4046 21.2627L68.5037 19.6579ZM39.1213 24.2585H42.7479V6.55615H39.1216L39.1213 24.2585ZM73.2361 6.55615V24.2585H76.8627V18.9549L81.1602 24.2585H85.7957L80.3308 17.958L85.3981 12.0788H80.9614L76.8627 16.9667V6.55615H73.2361ZM53.921 12.0795V13.5185C53.325 12.5262 51.8594 11.8317 50.3193 11.8317C47.1398 11.8317 44.631 14.6348 44.631 18.1568C44.631 21.6788 47.1398 24.5067 50.3193 24.5067C51.8594 24.5067 53.325 23.8122 53.921 22.8199V24.2585H57.5476V12.0795H53.921ZM53.921 19.6824C53.3994 20.5505 52.3064 21.1949 51.0895 21.1949C49.4155 21.1949 48.0589 19.8404 48.0589 18.1692C48.0589 16.498 49.4155 15.1432 51.0895 15.1432C52.3064 15.1432 53.3994 15.8128 53.921 16.7054V19.6824Z"
                        fill="#79797A"
                        fill-opacity="0.45"
                      />
                      <path
                        d="M7.80276 6.16507C6.6275 6.16507 5.67488 7.11658 5.67488 8.28999C5.6746 8.56876 5.72942 8.84486 5.8362 9.10251C5.94299 9.36017 6.09965 9.59434 6.29724 9.79166C6.49483 9.98898 6.72949 10.1456 6.9878 10.2525C7.24612 10.3595 7.52305 10.4146 7.80276 10.4149H9.931V8.28999C9.93147 7.72696 9.70752 7.1868 9.30841 6.78831C8.9093 6.38982 8.36771 6.16563 7.80276 6.16507ZM7.80276 11.8315H2.12806C0.952795 11.8315 0.000183105 12.783 0.000183105 13.9568C0.000183105 15.1302 0.952795 16.0817 2.12806 16.0817H7.80312C8.97803 16.0817 9.931 15.1302 9.931 13.9568C9.931 12.783 8.97803 11.8315 7.80276 11.8315Z"
                        fill="#79797A"
                        fill-opacity="0.45"
                      />
                      <path
                        d="M21.2805 13.9568C21.2805 12.783 20.3275 11.8315 19.1522 11.8315C17.977 11.8315 17.0243 12.783 17.0243 13.9568V16.0817H19.1522C19.7172 16.0812 20.2588 15.857 20.6579 15.4585C21.057 15.06 21.2809 14.5198 21.2805 13.9568ZM15.6058 13.9568V8.28999C15.6062 7.72696 15.3823 7.1868 14.9832 6.78831C14.5841 6.38982 14.0425 6.16563 13.4775 6.16507C12.3023 6.16507 11.3496 7.11658 11.3496 8.28999V13.9565C11.3496 15.1306 12.3023 16.0821 13.4775 16.0821C14.0425 16.0815 14.5841 15.8573 14.9832 15.4589C15.3823 15.0604 15.6062 14.5202 15.6058 13.9572"
                        fill="#79797A"
                        fill-opacity="0.45"
                      />
                      <path
                        d="M13.4776 27.415C14.0425 27.4145 14.5841 27.1903 14.9832 26.7918C15.3823 26.3933 15.6063 25.8532 15.6058 25.2901C15.6063 24.7271 15.3823 24.1869 14.9832 23.7884C14.5841 23.3899 14.0425 23.1658 13.4776 23.1652H11.3497V25.2901C11.3497 26.4635 12.3023 27.415 13.4776 27.415ZM13.4776 21.7486H19.1526C20.3275 21.7486 21.2805 20.7971 21.2805 19.6233C21.281 19.0603 21.057 18.5201 20.6579 18.1216C20.2588 17.7231 19.7172 17.4989 19.1523 17.4984H13.4776C12.3023 17.4984 11.3497 18.4499 11.3497 19.6233C11.3494 19.9021 11.4042 20.1782 11.511 20.4358C11.6178 20.6935 11.7745 20.9277 11.9721 21.125C12.1696 21.3223 12.4043 21.4789 12.6626 21.5858C12.9209 21.6928 13.1979 21.748 13.4776 21.7482"
                        fill="#79797A"
                        fill-opacity="0.45"
                      />
                      <path
                        d="M1.07368e-06 19.6233C-0.000279767 19.9021 0.0545367 20.1782 0.161321 20.4358C0.268105 20.6935 0.424765 20.9277 0.622357 21.125C0.819949 21.3223 1.0546 21.4789 1.31292 21.5858C1.57124 21.6928 1.84816 21.748 2.12788 21.7482C2.69283 21.7477 3.23442 21.5235 3.63353 21.125C4.03264 20.7265 4.25659 20.1863 4.25612 19.6233V17.4984H2.12788C0.952613 17.4984 1.07368e-06 18.4499 1.07368e-06 19.6233ZM5.6747 19.6233V25.2898C5.6747 26.4635 6.62731 27.415 7.80258 27.415C8.36753 27.4145 8.90912 27.1903 9.30823 26.7918C9.70734 26.3933 9.93129 25.8532 9.93082 25.2901V19.6233C9.9311 19.3445 9.87627 19.0684 9.76946 18.8107C9.66266 18.553 9.50597 18.3188 9.30834 18.1215C9.11071 17.9242 8.87601 17.7676 8.61765 17.6607C8.35929 17.5538 8.08233 17.4986 7.80258 17.4984C6.62731 17.4984 5.6747 18.4499 5.6747 19.6233Z"
                        fill="#79797A"
                        fill-opacity="0.45"
                      />
                    </svg>

                    <svg
                      width="86"
                      height="34"
                      viewBox="0 0 86 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_15_433)">
                        <path
                          d="M45.3831 9.95213C45.3831 10.9731 44.603 11.7956 43.6345 11.7956C42.666 11.7956 41.8859 10.9731 41.8859 9.95213C41.8859 8.93111 42.6391 8.10862 43.6345 8.10862C44.6299 8.13698 45.3831 8.95947 45.3831 9.95213ZM38.1734 13.6675C38.1734 13.8377 38.1734 14.1213 38.1734 14.1213C38.1734 14.1213 37.3394 12.9868 35.5639 12.9868C32.6316 12.9868 30.345 15.3408 30.345 18.6024C30.345 21.8357 32.6047 24.2181 35.5639 24.2181C37.3663 24.2181 38.1734 23.0552 38.1734 23.0552V23.5374C38.1734 23.7643 38.3348 23.9344 38.55 23.9344H40.7291V13.2704C40.7291 13.2704 38.7383 13.2704 38.55 13.2704C38.3348 13.2704 38.1734 13.469 38.1734 13.6675ZM38.1734 20.5027C37.7699 21.1266 36.9628 21.6655 35.9944 21.6655C34.2726 21.6655 32.9544 20.531 32.9544 18.6024C32.9544 16.6738 34.2726 15.5394 35.9944 15.5394C36.9359 15.5394 37.7968 16.1066 38.1734 16.7022V20.5027ZM42.3432 13.2704H44.9258V23.9344H42.3432V13.2704ZM80.9205 12.9868C79.145 12.9868 78.311 14.1213 78.311 14.1213V8.13698H75.7284V23.9344C75.7284 23.9344 77.7192 23.9344 77.9075 23.9344C78.1227 23.9344 78.2841 23.7359 78.2841 23.5374V23.0552C78.2841 23.0552 79.1181 24.2181 80.8936 24.2181C83.8259 24.2181 86.1126 21.8357 86.1126 18.6024C86.1126 15.3692 83.8259 12.9868 80.9205 12.9868ZM80.4901 21.6371C79.4947 21.6371 78.7146 21.0983 78.311 20.4743V16.6738C78.7146 16.1066 79.5754 15.511 80.4901 15.511C82.2118 15.511 83.53 16.6455 83.53 18.5741C83.53 20.5027 82.2118 21.6371 80.4901 21.6371ZM74.3834 17.6098V23.9628H71.8008V17.9218C71.8008 16.1633 71.2627 15.4543 69.81 15.4543C69.0299 15.4543 68.2228 15.8797 67.7117 16.5037V23.9344H65.1291V13.2704H67.1736C67.3889 13.2704 67.5503 13.469 67.5503 13.6675V14.1213C68.3035 13.2988 69.2989 12.9868 70.2943 12.9868C71.4241 12.9868 72.3657 13.3272 73.119 14.0079C74.0336 14.802 74.3834 15.823 74.3834 17.6098ZM58.861 12.9868C57.0854 12.9868 56.2515 14.1213 56.2515 14.1213V8.13698H53.6689V23.9344C53.6689 23.9344 55.6596 23.9344 55.848 23.9344C56.0632 23.9344 56.2246 23.7359 56.2246 23.5374V23.0552C56.2246 23.0552 57.0585 24.2181 58.8341 24.2181C61.7664 24.2181 64.053 21.8357 64.053 18.6024C64.0799 15.3692 61.7933 12.9868 58.861 12.9868ZM58.4305 21.6371C57.4352 21.6371 56.655 21.0983 56.2515 20.4743V16.6738C56.655 16.1066 57.5159 15.511 58.4305 15.511C60.1523 15.511 61.4704 16.6455 61.4704 18.5741C61.4704 20.5027 60.1523 21.6371 58.4305 21.6371ZM51.436 12.9868C52.2162 12.9868 52.6197 13.1286 52.6197 13.1286V15.6528C52.6197 15.6528 50.4676 14.8871 49.1225 16.5037V23.9628H46.5399V13.2704C46.5399 13.2704 48.5306 13.2704 48.7189 13.2704C48.9342 13.2704 49.0956 13.469 49.0956 13.6675V14.1213C49.5798 13.5257 50.629 12.9868 51.436 12.9868ZM24.6149 22.9701C24.4803 22.6298 24.3458 22.2611 24.2113 21.9491C23.9961 21.4386 23.7809 20.9565 23.5926 20.5027L23.5657 20.4743C21.7094 16.2201 19.7187 11.9091 17.6204 7.65483L17.5397 7.48466C17.3244 7.05924 17.1092 6.60545 16.894 6.15166C16.625 5.64115 16.356 5.10228 15.9255 4.59177C15.0647 3.4573 13.8272 2.83334 12.509 2.83334C11.1639 2.83334 9.95332 3.4573 9.06556 4.53505C8.66203 5.04556 8.36611 5.58443 8.09709 6.09494C7.88187 6.54873 7.66666 7.00251 7.45144 7.42794L7.37074 7.59811C5.29929 11.8524 3.28165 16.1633 1.42542 20.4176L1.39852 20.4743C1.2102 20.9281 0.994987 21.4103 0.779772 21.9208C0.645263 22.2327 0.510753 22.5731 0.376244 22.9418C0.0265192 23.9912 -0.0810884 24.9838 0.0534211 26.0048C0.349342 28.132 1.69444 29.9188 3.55067 30.7129C4.25012 31.0249 4.97647 31.1667 5.72972 31.1667C5.94494 31.1667 6.21395 31.1383 6.42917 31.11C7.31693 30.9965 8.2316 30.6845 9.11936 30.1457C10.2223 29.4933 11.2715 28.5574 12.4552 27.196C13.6389 28.5574 14.715 29.4933 15.791 30.1457C16.6788 30.6845 17.5935 30.9965 18.4812 31.11C18.6964 31.1383 18.9655 31.1667 19.1807 31.1667C19.9339 31.1667 20.6872 31.0249 21.3597 30.7129C23.2429 29.9188 24.561 28.1036 24.857 26.0048C25.0722 25.0122 24.9646 24.0195 24.6149 22.9701ZM12.4821 24.445C11.0294 22.5164 10.0878 20.7012 9.76501 19.1697C9.6305 18.5174 9.60359 17.9501 9.6843 17.4396C9.7381 16.9858 9.89951 16.5888 10.1147 16.2484C10.6259 15.4827 11.4867 15.0005 12.4821 15.0005C13.4775 15.0005 14.3652 15.4543 14.8495 16.2484C15.0647 16.5888 15.2261 16.9858 15.2799 17.4396C15.3606 17.9501 15.3337 18.5457 15.1992 19.1697C14.8764 20.6728 13.9348 22.488 12.4821 24.445ZM23.216 25.778C23.0276 27.2528 22.0861 28.529 20.7679 29.0963C20.1222 29.3799 19.4228 29.465 18.7233 29.3799C18.0508 29.2948 17.3782 29.0679 16.6788 28.6425C15.7103 28.0753 14.7419 27.196 13.612 25.8914C15.3875 23.5941 16.4636 21.4953 16.8671 19.6235C17.0554 18.7443 17.0823 17.9501 17.0016 17.2127C16.894 16.5037 16.6519 15.8514 16.2753 15.2841C15.4413 14.0079 14.0424 13.2704 12.4821 13.2704C10.9218 13.2704 9.52289 14.0362 8.68893 15.2841C8.3123 15.8514 8.07019 16.5037 7.96258 17.2127C7.85497 17.9501 7.88187 18.7726 8.09709 19.6235C8.50062 21.4953 9.60359 23.6225 11.3522 25.9198C10.2492 27.2244 9.25387 28.1036 8.2854 28.6708C7.58595 29.0963 6.9134 29.3232 6.24086 29.4082C5.51451 29.4933 4.81506 29.3799 4.19631 29.1246C2.87812 28.5574 1.93655 27.2811 1.74824 25.8063C1.66753 25.0973 1.72134 24.3882 1.99036 23.5941C2.07106 23.3105 2.20557 23.0269 2.34008 22.6865C2.5284 22.2327 2.74361 21.7506 2.95883 21.2684L2.98573 21.2117C4.84196 16.9858 6.8327 12.6749 8.90414 8.47732L8.98485 8.30715C9.20007 7.88172 9.41528 7.42794 9.6305 7.00251C9.84571 6.54873 10.0878 6.1233 10.3837 5.7546C10.9487 5.07392 11.7019 4.70522 12.5359 4.70522C13.3699 4.70522 14.1231 5.07392 14.6881 5.7546C14.984 6.1233 15.2261 6.54873 15.4413 7.00251C15.6565 7.42794 15.8717 7.88172 16.087 8.30715L16.1677 8.47732C18.2122 12.7032 20.2029 17.0142 22.0592 21.2401V21.2684C22.2744 21.7222 22.4627 22.2327 22.6779 22.6865C22.8124 23.0269 22.9469 23.3105 23.0276 23.5941C23.2429 24.3315 23.3236 25.0406 23.216 25.778Z"
                          fill="#818487"
                          fill-opacity="0.45"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_15_433">
                          <rect width="86" height="34" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <Image src={earth} width="700" height="600" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
