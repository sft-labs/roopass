export const metadata = {
  title: "Get App",
  description: "Get App",
};

import Link from "next/link";

export default function GetApp() {
  return (
    <section className="bg-gradient-to-b from-[#fff7f6] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h2">Download Roopass (beta)</h1>
          </div>
          {/* iphone */}
          <div className="max-w-3xl mx-auto text-start pb-12 md:pb-20 text-gray-700">
            <h1 className="h3 mb-5">iphone</h1>
            {/* step 1 */}
            <div className="flex flex-row">
              <svg
                width="51"
                height="51"
                viewBox="0 0 61 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30.5" cy="30.5" r="30.5" fill="#FF5C00" />
                <path
                  d="M33 18.1719V41H29.2344V22.6406L23.6562 24.5312V21.4219L32.5469 18.1719H33Z"
                  fill="white"
                />
              </svg>
              <Link
                href={
                  "https://apps.apple.com/us/app/testflight/id899247664?mt=8"
                }
                className="h4 underline flex items-center ml-4"
              >
                Download TestFlight
              </Link>
              <div className="flex items-center">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_164_11)">
                    <path
                      d="M8.37865 7.25758C8.37869 6.99242 8.48404 6.73813 8.67154 6.55063C8.85904 6.36313 9.11333 6.25777 9.3785 6.25773L15.7425 6.25773C16.0076 6.25777 16.2619 6.36313 16.4494 6.55063C16.6369 6.73813 16.7423 6.99242 16.7423 7.25758V13.6215C16.7377 13.8837 16.6304 14.1336 16.4434 14.3174C16.2564 14.5012 16.0047 14.6042 15.7425 14.6042C15.4803 14.6042 15.2285 14.5012 15.0415 14.3174C14.8545 14.1336 14.7472 13.8837 14.7426 13.6215L14.6818 9.73246L7.96428 16.45C7.77675 16.6375 7.52239 16.7429 7.25718 16.7429C6.99196 16.7429 6.73761 16.6375 6.55007 16.45C6.36253 16.2624 6.25718 16.0081 6.25718 15.7429C6.25718 15.4776 6.36253 15.2233 6.55007 15.0358L13.2676 8.31824L9.3785 8.25743C9.11333 8.25739 8.85904 8.15204 8.67154 7.96454C8.48404 7.77704 8.37869 7.52275 8.37865 7.25758Z"
                      fill="#4C4C4C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_164_11">
                      <rect
                        width="15"
                        height="15"
                        fill="white"
                        transform="translate(0.893311 11.5) rotate(-45)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <p className="text-xl font-bold mt-3 text-gray-600">
              TestFlight is the official beta testing service from Apple.
            </p>
            {/* step 2 */}
            <div className="flex flex-row mt-5">
              <svg
                width="51"
                height="51"
                viewBox="0 0 61 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30.5" cy="30.5" r="30.5" fill="#FF5C00" />
                <path
                  d="M37.9688 38V41H22.7188V38.4219L30.125 30.3438C30.9375 29.4271 31.5781 28.6354 32.0469 27.9688C32.5156 27.3021 32.8438 26.7031 33.0312 26.1719C33.2292 25.6302 33.3281 25.1042 33.3281 24.5938C33.3281 23.875 33.1927 23.2448 32.9219 22.7031C32.6615 22.151 32.276 21.7188 31.7656 21.4062C31.2552 21.0833 30.6354 20.9219 29.9062 20.9219C29.0625 20.9219 28.3542 21.1042 27.7812 21.4688C27.2083 21.8333 26.776 22.3385 26.4844 22.9844C26.1927 23.6198 26.0469 24.349 26.0469 25.1719H22.2812C22.2812 23.849 22.5833 22.6406 23.1875 21.5469C23.7917 20.4427 24.6667 19.5677 25.8125 18.9219C26.9583 18.2656 28.3385 17.9375 29.9531 17.9375C31.474 17.9375 32.7656 18.1927 33.8281 18.7031C34.8906 19.2135 35.6979 19.9375 36.25 20.875C36.8125 21.8125 37.0938 22.9219 37.0938 24.2031C37.0938 24.9115 36.9792 25.6146 36.75 26.3125C36.5208 27.0104 36.1927 27.7083 35.7656 28.4062C35.349 29.0938 34.8542 29.7865 34.2812 30.4844C33.7083 31.1719 33.0781 31.8698 32.3906 32.5781L27.4688 38H37.9688Z"
                  fill="white"
                />
              </svg>
              <h1 className="h4 flex items-center ml-4 text-[#FF5C00]">
                Come back to this page
              </h1>
            </div>
            {/* step 3 */}
            <div className="flex flex-row mt-5">
              <svg
                width="51"
                height="51"
                viewBox="0 0 61 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30.5" cy="30.5" r="30.5" fill="#FF5C00" />
                <path
                  d="M27.1406 27.9219H29.3906C30.2656 27.9219 30.9896 27.7708 31.5625 27.4688C32.1458 27.1667 32.5781 26.75 32.8594 26.2188C33.1406 25.6875 33.2812 25.0781 33.2812 24.3906C33.2812 23.6719 33.151 23.0573 32.8906 22.5469C32.6406 22.026 32.2552 21.625 31.7344 21.3438C31.224 21.0625 30.5729 20.9219 29.7812 20.9219C29.1146 20.9219 28.5104 21.0573 27.9688 21.3281C27.4375 21.5885 27.0156 21.9635 26.7031 22.4531C26.3906 22.9323 26.2344 23.5052 26.2344 24.1719H22.4531C22.4531 22.9635 22.7708 21.8906 23.4062 20.9531C24.0417 20.0156 24.9062 19.2812 26 18.75C27.1042 18.2083 28.3438 17.9375 29.7188 17.9375C31.1875 17.9375 32.4688 18.1823 33.5625 18.6719C34.6667 19.151 35.526 19.8698 36.1406 20.8281C36.7552 21.7865 37.0625 22.974 37.0625 24.3906C37.0625 25.0365 36.9115 25.6927 36.6094 26.3594C36.3073 27.026 35.8594 27.6354 35.2656 28.1875C34.6719 28.7292 33.9323 29.1719 33.0469 29.5156C32.1615 29.849 31.1354 30.0156 29.9688 30.0156H27.1406V27.9219ZM27.1406 30.8594V28.7969H29.9688C31.3021 28.7969 32.4375 28.9531 33.375 29.2656C34.3229 29.5781 35.0938 30.0104 35.6875 30.5625C36.2812 31.1042 36.7135 31.724 36.9844 32.4219C37.2656 33.1198 37.4062 33.8594 37.4062 34.6406C37.4062 35.7031 37.2135 36.651 36.8281 37.4844C36.4531 38.3073 35.9167 39.0052 35.2188 39.5781C34.5208 40.151 33.7031 40.5833 32.7656 40.875C31.8385 41.1667 30.8281 41.3125 29.7344 41.3125C28.7552 41.3125 27.8177 41.1771 26.9219 40.9062C26.026 40.6354 25.224 40.2344 24.5156 39.7031C23.8073 39.1615 23.2448 38.4896 22.8281 37.6875C22.4219 36.875 22.2188 35.9375 22.2188 34.875H25.9844C25.9844 35.5521 26.1406 36.151 26.4531 36.6719C26.776 37.1823 27.224 37.5833 27.7969 37.875C28.3802 38.1667 29.0469 38.3125 29.7969 38.3125C30.5885 38.3125 31.2708 38.1719 31.8438 37.8906C32.4167 37.6094 32.8542 37.1927 33.1562 36.6406C33.4688 36.0885 33.625 35.4219 33.625 34.6406C33.625 33.7552 33.4531 33.0365 33.1094 32.4844C32.7656 31.9323 32.276 31.526 31.6406 31.2656C31.0052 30.9948 30.2552 30.8594 29.3906 30.8594H27.1406Z"
                  fill="white"
                />
              </svg>
              <Link
                href={
                  "https://apps.apple.com/us/app/testflight/id899247664?mt=8"
                }
                className="h4 underline flex items-center ml-4"
              >
                Download Roopass
              </Link>
              <div className="flex items-center">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_164_11)">
                    <path
                      d="M8.37865 7.25758C8.37869 6.99242 8.48404 6.73813 8.67154 6.55063C8.85904 6.36313 9.11333 6.25777 9.3785 6.25773L15.7425 6.25773C16.0076 6.25777 16.2619 6.36313 16.4494 6.55063C16.6369 6.73813 16.7423 6.99242 16.7423 7.25758V13.6215C16.7377 13.8837 16.6304 14.1336 16.4434 14.3174C16.2564 14.5012 16.0047 14.6042 15.7425 14.6042C15.4803 14.6042 15.2285 14.5012 15.0415 14.3174C14.8545 14.1336 14.7472 13.8837 14.7426 13.6215L14.6818 9.73246L7.96428 16.45C7.77675 16.6375 7.52239 16.7429 7.25718 16.7429C6.99196 16.7429 6.73761 16.6375 6.55007 16.45C6.36253 16.2624 6.25718 16.0081 6.25718 15.7429C6.25718 15.4776 6.36253 15.2233 6.55007 15.0358L13.2676 8.31824L9.3785 8.25743C9.11333 8.25739 8.85904 8.15204 8.67154 7.96454C8.48404 7.77704 8.37869 7.52275 8.37865 7.25758Z"
                      fill="#4C4C4C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_164_11">
                      <rect
                        width="15"
                        height="15"
                        fill="white"
                        transform="translate(0.893311 11.5) rotate(-45)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          {/* Android */}
          <div className="max-w-3xl mx-auto text-start pb-12 md:pb-20 text-gray-700">
            <h1 className="h3 mb-5">Android</h1>
            {/* step 1 */}
            <div className="flex flex-row">
              <svg
                width="51"
                height="51"
                viewBox="0 0 61 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30.5" cy="30.5" r="30.5" fill="#FF5C00" />
                <path
                  d="M33 18.1719V41H29.2344V22.6406L23.6562 24.5312V21.4219L32.5469 18.1719H33Z"
                  fill="white"
                />
              </svg>
              <Link
                href={
                  "https://apps.apple.com/us/app/testflight/id899247664?mt=8"
                }
                className="h4 underline flex items-center ml-4"
              >
                Google Play Store
              </Link>
              <div className="flex items-center">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_164_11)">
                    <path
                      d="M8.37865 7.25758C8.37869 6.99242 8.48404 6.73813 8.67154 6.55063C8.85904 6.36313 9.11333 6.25777 9.3785 6.25773L15.7425 6.25773C16.0076 6.25777 16.2619 6.36313 16.4494 6.55063C16.6369 6.73813 16.7423 6.99242 16.7423 7.25758V13.6215C16.7377 13.8837 16.6304 14.1336 16.4434 14.3174C16.2564 14.5012 16.0047 14.6042 15.7425 14.6042C15.4803 14.6042 15.2285 14.5012 15.0415 14.3174C14.8545 14.1336 14.7472 13.8837 14.7426 13.6215L14.6818 9.73246L7.96428 16.45C7.77675 16.6375 7.52239 16.7429 7.25718 16.7429C6.99196 16.7429 6.73761 16.6375 6.55007 16.45C6.36253 16.2624 6.25718 16.0081 6.25718 15.7429C6.25718 15.4776 6.36253 15.2233 6.55007 15.0358L13.2676 8.31824L9.3785 8.25743C9.11333 8.25739 8.85904 8.15204 8.67154 7.96454C8.48404 7.77704 8.37869 7.52275 8.37865 7.25758Z"
                      fill="#4C4C4C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_164_11">
                      <rect
                        width="15"
                        height="15"
                        fill="white"
                        transform="translate(0.893311 11.5) rotate(-45)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              {/* <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                  <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your name" required />
                </div>
              </div> */}
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                  <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                </div>
              </div>
              {/* <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                  <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password" required />
                </div>
              </div> */}
              {/* <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Sign up</button>
                </div>
              </div>
              <div className="text-sm text-gray-500 text-center mt-3">
                By creating an account, you agree to the <a className="underline" href="#0">terms & conditions</a>, and our <a className="underline" href="#0">privacy policy</a>.
              </div> */}
            </form>
            {/* <div className="flex items-center my-6">
              <div className="border-t border-gray-300 grow mr-3" aria-hidden="true"></div>
              <div className="text-gray-600 italic">Or</div>
              <div className="border-t border-gray-300 grow ml-3" aria-hidden="true"></div>
            </div> */}
            <form>
              {/* <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                  <button className="btn px-0 text-white bg-gray-900 hover:bg-gray-800 w-full relative flex items-center">
                    <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z" />
                    </svg>
                    <span className="flex-auto pl-16 pr-8 -ml-16">Continue with GitHub</span>
                  </button>
                </div>
              </div> */}
              {/* <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                    <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                    </svg>
                    <span className="flex-auto pl-16 pr-8 -ml-16">Continue with Google</span>
                  </button>
                </div>
              </div> */}
            </form>
            {/* <div className="text-gray-600 text-center mt-6">
              Already using Simple? <Link href="/signin" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign in</Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
