import {
  Blocks,
  ChevronRight,
  ClipboardList,
  Gift,
  GiftIcon,
  PoundSterlingIcon,
  UserPlus
} from 'lucide-react';

export default function HomePageContents() {
  return (
    <main className="pt-20">
      <section className="container mx-auto px-6 py-24 text-center">
        {/* <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Your Opinion is Valuable.
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Get Rewarded.
          </span>
        </h1> */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Your Trusted Voice.
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Securely Rewarded.
          </span>
        </h1>
        {/* <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          Earn tokens and gift cards for sharing your thoughts on products and
          services you use every day. Join a community of thinkers and start
          making an impact.
        </p> */}
        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          Get rewarded quickly for sharing your thoughts on products and
          services you use every day and games you play with our trusted
          platform. Join a community of trusted brands and start making an
          impact.
        </p>
        <a
          href="#sign-up"
          className="mt-8 inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold cta-button hover:bg-blue-700"
        >
          Start Earning Now
        </a>
      </section>

      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">How It Works</h2>
            <p className="text-gray-400 mt-2">
              Getting rewarded is as easy as 1, 2, 3.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <div className="glass-effect p-8 rounded-xl">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500/20 mx-auto mb-6">
                <UserPlus className="text-blue-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                1. Create an Account
              </h3>
              <p className="mt-2 text-gray-400">
                Sign up for your free account in just a few minutes. It's quick,
                easy, and secure.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-xl">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500/20 mx-auto mb-6">
                <ClipboardList className="text-blue-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                2. Take Surveys and Play Games
              </h3>
              <p className="mt-2 text-gray-400">
                Browse, play games, and complete surveys that match your profile
                and interests. New surveys are added daily!
              </p>
            </div>

            <div className="glass-effect p-8 rounded-xl">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500/20 mx-auto mb-6">
                <Gift className="text-blue-400 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                3. Get Rewarded
              </h3>
              <p className="mt-2 text-gray-400">
                Redeem your earned tokens for gift cards from your favourite
                brands, for cash payouts, and for NFTs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="rewards" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Spend Your Tokens on Top Brands
            </h2>
            <p className="text-gray-400 mt-2">
              We partner with the companies you love.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="h-10 brand-logo">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 603 182"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_367_980)">
                  <path
                    d="M374.006 142.184C339.007 167.982 288.277 181.746 244.6 181.746C183.357 181.746 128.223 159.094 86.5123 121.421C83.2352 118.458 86.1715 114.421 90.104 116.728C135.118 142.918 190.777 158.675 248.27 158.675C287.045 158.675 329.7 150.652 368.92 134.005C374.845 131.488 379.8 137.885 374.006 142.184Z"
                    fill="currentColor"
                  />
                  <path
                    d="M388.557 125.536C384.1 119.821 358.984 122.836 347.711 124.173C344.277 124.592 343.752 121.603 346.846 119.454C366.849 105.375 399.673 109.439 403.5 114.158C407.328 118.903 402.504 151.805 383.707 167.509C380.823 169.921 378.07 168.636 379.355 165.438C383.576 154.899 393.04 131.277 388.557 125.536Z"
                    fill="currentColor"
                  />
                  <path
                    d="M348.497 20.0657V6.38054C348.497 4.30941 350.07 2.91992 351.957 2.91992H413.226C415.192 2.91992 416.765 4.33563 416.765 6.38054V18.0995C416.739 20.0657 415.087 22.635 412.151 26.6986L380.402 72.0275C392.2 71.7391 404.653 73.4957 415.35 79.5255C417.762 80.8888 418.417 82.8813 418.6 84.8476V99.4503C418.6 101.443 416.398 103.776 414.091 102.57C395.241 92.6864 370.204 91.6115 349.362 102.675C347.238 103.829 345.01 101.521 345.01 99.529V85.6603C345.01 83.4319 345.036 79.6304 347.264 76.2484L384.047 23.5001H352.036C350.07 23.5001 348.497 22.1107 348.497 20.0657Z"
                    fill="currentColor"
                  />
                  <path
                    d="M124.999 105.455H106.359C104.576 105.324 103.16 103.987 103.029 102.282V6.61718C103.029 4.70335 104.629 3.18276 106.621 3.18276H124.003C125.812 3.26136 127.254 4.6509 127.385 6.38121V18.8867H127.726C132.261 6.80068 140.782 1.16406 152.265 1.16406C163.931 1.16406 171.219 6.80068 176.463 18.8867C180.972 6.80068 191.223 1.16406 202.208 1.16406C210.02 1.16406 218.567 4.38873 223.784 11.6246C229.683 19.6732 228.477 31.3659 228.477 41.6167L228.451 101.994C228.451 103.908 226.851 105.455 224.859 105.455H206.245C204.384 105.324 202.889 103.829 202.889 101.994V51.2907C202.889 47.2533 203.256 37.186 202.365 33.3583C200.975 26.9352 196.807 25.1263 191.406 25.1263C186.897 25.1263 182.178 28.1412 180.264 32.9651C178.35 37.789 178.534 45.8638 178.534 51.2907V101.994C178.534 103.908 176.935 105.455 174.942 105.455H156.328C154.441 105.324 152.972 103.829 152.972 101.994L152.946 51.2907C152.946 40.6204 154.703 24.9165 141.463 24.9165C128.066 24.9165 128.591 40.2272 128.591 51.2907V101.994C128.591 103.908 126.991 105.455 124.999 105.455Z"
                    fill="currentColor"
                  />
                  <path
                    d="M469.515 1.16406C497.174 1.16406 512.144 24.9165 512.144 55.1183C512.144 84.2977 495.601 107.447 469.515 107.447C442.355 107.447 427.568 83.6947 427.568 54.0959C427.568 24.3135 442.538 1.16406 469.515 1.16406ZM469.673 20.6956C455.935 20.6956 455.07 39.4144 455.07 51.0809C455.07 62.7737 454.886 87.7321 469.515 87.7321C483.961 87.7321 484.642 67.5976 484.642 55.3281C484.642 47.2533 484.302 37.6055 481.863 29.9502C479.766 23.2911 475.598 20.6956 469.673 20.6956Z"
                    fill="currentColor"
                  />
                  <path
                    d="M548.008 105.455H529.446C527.585 105.324 526.091 103.829 526.091 101.994L526.064 6.30256C526.222 4.54603 527.769 3.18276 529.656 3.18276H546.933C548.558 3.26136 549.896 4.36252 550.263 5.85688V20.4859H550.603C555.821 7.40367 563.135 1.16406 576.008 1.16406C584.371 1.16406 592.524 4.179 597.768 12.4373C602.644 20.0926 602.644 32.9651 602.644 42.2196V102.44C602.434 104.118 600.887 105.455 599.052 105.455H580.359C578.655 105.324 577.24 104.065 577.056 102.44V50.478C577.056 40.0174 578.262 24.7068 565.39 24.7068C560.854 24.7068 556.686 27.748 554.615 32.3621C551.993 38.2085 551.652 44.0286 551.652 50.478V101.994C551.626 103.908 550 105.455 548.008 105.455Z"
                    fill="currentColor"
                  />
                  <path
                    d="M299.655 59.7583V55.7209C286.179 55.7209 271.944 58.6048 271.944 74.4922C271.944 82.5408 276.112 87.9939 283.269 87.9939C288.513 87.9939 293.205 84.7692 296.168 79.5258C299.838 73.0765 299.655 67.0204 299.655 59.7583ZM318.452 105.192C317.22 106.293 315.437 106.372 314.048 105.638C307.861 100.499 306.76 98.1136 303.351 93.211C293.127 103.645 285.891 106.765 272.625 106.765C256.947 106.765 244.73 97.0911 244.73 77.7169C244.73 62.5898 252.936 52.2865 264.603 47.2529C274.723 42.796 288.853 42.0095 299.655 40.7773V38.3654C299.655 33.9347 299.996 28.6914 297.4 24.8637C295.119 21.4293 290.767 20.0136 286.94 20.0136C279.835 20.0136 273.49 23.6577 271.944 31.2082C271.629 32.8861 270.397 34.5377 268.719 34.6164L250.629 32.6763C249.109 32.3355 247.431 31.1033 247.85 28.77C252.019 6.85275 271.812 0.246094 289.535 0.246094C298.606 0.246094 310.456 2.65804 317.613 9.52685C326.684 17.9949 325.819 29.2944 325.819 41.5901V70.6383C325.819 79.3685 329.437 83.1962 332.845 87.9152C334.051 89.5931 334.313 91.6118 332.793 92.8702C328.991 96.0425 322.227 101.941 318.505 105.245L318.452 105.192Z"
                    fill="currentColor"
                  />
                  <path
                    d="M55.2876 59.7583V55.7209C41.8121 55.7209 27.5764 58.6048 27.5764 74.4922C27.5764 82.5408 31.7448 87.9939 38.902 87.9939C44.1454 87.9939 48.8382 84.7692 51.8007 79.5258C55.4711 73.0765 55.2876 67.0204 55.2876 59.7583ZM74.085 105.192C72.8529 106.293 71.0701 106.372 69.6806 105.638C63.4934 100.499 62.3923 98.1136 58.9841 93.211C48.7596 103.645 41.5237 106.765 28.258 106.765C12.5803 106.765 0.363281 97.0911 0.363281 77.7169C0.363281 62.5898 8.56915 52.2865 20.2356 47.2529C30.3553 42.796 44.4862 42.0095 55.2876 40.7773V38.3654C55.2876 33.9347 55.6284 28.6914 53.0329 24.8637C50.752 21.4293 46.4001 20.0136 42.5724 20.0136C35.4676 20.0136 29.1232 23.6577 27.5764 31.2082C27.2618 32.8861 26.0296 34.5377 24.3517 34.6164L6.26207 32.6763C4.74149 32.3355 3.06361 31.1033 3.48308 28.77C7.65156 6.85275 27.4453 0.246094 45.1679 0.246094C54.2389 0.246094 66.0889 2.65804 73.2461 9.52685C82.3171 17.9949 81.452 29.2944 81.452 41.5901V70.6383C81.452 79.3685 85.0699 83.1962 88.4781 87.9152C89.6841 89.5931 89.9462 91.6118 88.4257 92.8702C84.6242 96.0425 77.8603 101.941 74.1375 105.245L74.085 105.192Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_367_980">
                    <rect width="603" height="182" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="h-10 brand-logo">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 250 133"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_368_990)">
                  <path
                    d="M239.714 56.2089C239.565 49.9509 236.449 43.9649 231.116 41.1619C233.173 38.0091 235.183 34.8254 237.143 31.6119C239.157 35.6789 242.135 40.0739 242.135 45.8549C242.136 49.5289 241.279 53.1339 239.714 56.2089ZM234.558 62.4529C232.3 64.0989 229.62 65.0649 226.614 65.0649C222.6 65.0649 219.185 63.4189 217.063 60.5759C221.09 55.6789 225.076 50.1809 228.832 44.6039C233.213 47.0659 234.994 52.7519 234.994 57.8949C234.993 59.4869 234.857 61.0119 234.558 62.4529ZM215.103 56.2769C214.885 55.3109 214.776 54.2769 214.776 53.2019C214.776 47.7469 218.654 43.3519 223.783 43.3519C224.124 43.3519 224.464 43.3639 224.776 43.3909C221.51 48.0169 218.246 52.4119 215.102 56.2749M155.284 80.9399C153.528 80.9399 152.726 79.5119 152.726 76.9009C152.726 68.4519 160.235 50.7379 172.289 40.3309C173.622 42.5349 174.221 45.3379 174.234 48.2629C174.284 62.2209 161.501 80.9399 155.284 80.9399ZM107.491 91.3069C105.79 91.3069 104.933 89.8379 104.933 87.3339C104.933 76.4239 123.462 40.7389 132.782 40.7389C134.537 40.7389 135.34 42.2079 135.34 44.7649C135.34 55.7859 116.919 91.3069 107.491 91.3069ZM80.4733 54.0299C78.2013 51.5679 75.7253 49.5679 73.1673 48.0169C79.5073 34.9839 86.5413 22.6709 95.3433 13.2849C98.3363 16.3729 99.9553 20.5909 99.9553 25.6379C99.9543 38.1809 91.6833 49.1869 80.4733 54.0299ZM45.4003 114.625C42.9513 114.625 40.7203 114.299 38.7203 113.713C49.6993 101.362 57.8753 81.5799 66.8133 61.7179C70.5683 61.8399 74.1733 61.3779 77.3703 60.8069C79.1523 64.5759 80.2543 69.1859 80.2543 74.6709C80.2553 92.6139 67.0583 114.625 45.4003 114.625ZM30.7753 109.293C27.2523 105.986 25.5103 101.715 25.5513 98.1639C25.5813 96.3939 26.0543 94.7639 26.8163 93.3479C27.9453 95.8249 30.6933 97.7019 34.0263 97.7019C35.2779 97.6979 36.5166 97.4485 37.6723 96.9679C35.4143 101.578 33.1423 105.743 30.7753 109.293ZM54.4333 50.3039C54.4333 47.8959 57.3453 47.4739 60.4463 47.8419C59.3302 49.92 58.2464 52.0152 57.1953 54.1269C55.4403 53.0379 54.4333 51.6909 54.4333 50.3039ZM71.0173 52.5349C72.2512 53.5604 73.3771 54.7094 74.3773 55.9639C72.649 56.3322 70.8922 56.5504 69.1263 56.6159C69.7523 55.2559 70.3783 53.8819 71.0173 52.5349ZM239.347 28.3459C241.443 25.9509 242.748 22.9579 242.748 20.7539C242.748 19.2579 241.877 18.3059 240.476 18.3059C238.15 18.3059 235.347 21.1759 235.347 25.5019C235.347 26.1139 235.426 26.7129 235.538 27.3119C232.871 31.4889 230.096 35.7199 227.279 39.8009C226.28 39.6027 225.264 39.5026 224.245 39.5019C217.484 39.5019 210.518 44.5759 210.518 53.7459C210.518 56.2349 210.954 58.4259 211.702 60.3159C205.907 66.9149 200.818 71.1859 197.376 71.1859C196.017 71.1859 195.2 70.4519 195.2 68.9149C195.2 67.2689 196.003 64.6569 197.595 61.0249L217.471 16.9869L238.939 14.4569L241.375 9.36891L220.601 10.0489L224.205 2.07591L216.152 3.08291L212.492 10.3079L183.433 11.2459L178.208 21.6129L208.601 18.0349L202.492 30.1559C199.363 28.7549 195.582 27.9529 191.174 27.9529C184.522 27.9529 178.345 29.5989 172.78 32.3879C170.263 31.1629 167.42 30.5649 164.522 30.5649C157.501 30.5649 149.557 33.9389 143.095 39.8569C141.788 35.8309 139.054 33.4089 134.999 33.4089C130.278 33.4089 125.259 35.8849 120.456 39.8979C117.585 37.5439 113.422 36.8639 109.056 38.5239C111.41 34.1289 112.702 29.4499 112.702 24.7959C112.702 16.6749 108.893 10.7019 101.941 7.09691C104.322 5.16491 106.825 3.43791 109.478 1.95391C108.499 1.17891 107.887 0.702906 107.07 0.253906C103.673 1.63343 100.393 3.28479 97.2613 5.19191C92.8813 3.79091 87.6573 3.08391 81.6843 3.08391C53.9443 3.08391 27.7013 19.0959 27.7013 38.8769C27.7013 47.6109 32.6393 50.7269 37.5233 50.7269C42.0813 50.7269 46.5433 48.1689 47.9583 45.0679C43.9853 44.2519 41.6323 40.8099 41.6323 36.4429C41.6323 21.0419 60.2983 7.55991 79.4533 7.55991C83.7383 7.55991 87.4523 8.36291 90.5003 9.83091C78.8683 18.7829 69.9433 30.9729 62.5703 44.0059C61.5439 43.8471 60.507 43.7652 59.4683 43.7609C53.9583 43.7609 49.9863 46.1279 49.9863 50.6989C49.9863 53.8009 52.0133 56.4679 55.1013 58.3989C50.5573 67.8819 46.5583 77.3779 42.7353 86.0169C41.4023 83.3919 38.3813 81.6769 34.8713 81.6769C26.4363 81.6769 20.0973 89.1049 20.0973 98.2879C20.0973 104.288 22.5323 110.015 26.7223 114.601C22.7633 119.021 18.4373 121.648 13.3763 121.769C11.7319 121.819 10.1063 121.409 8.68231 120.585C12.6413 120.151 15.8923 117.212 15.7973 113.39C15.6983 109.566 12.5193 106.859 8.15131 106.954C2.80431 107.077 -0.0936891 111.552 0.00231087 115.47C0.166311 122.736 6.32831 126.544 14.3693 126.355C21.3213 126.191 27.2933 123.714 32.6133 119.539C37.6603 122.777 43.9733 124.75 51.0343 124.75C72.3663 124.75 90.4733 106.574 90.4733 82.1819C90.4733 72.4809 87.9703 64.8079 84.2423 58.9319C91.1673 56.4959 97.2483 52.6059 101.982 47.9109C108.621 41.3269 113.56 41.9389 116.362 43.7219C105.356 55.1499 96.4183 73.5829 96.4183 85.9769C96.4183 93.6509 99.4793 98.6429 105.383 98.6429C123.096 98.6429 144.238 64.4949 143.979 45.7349C149.666 39.4349 157.271 35.6799 163.447 35.6799C164.617 35.6799 165.678 35.8169 166.644 36.0759C152.808 45.8569 144.183 62.5909 144.183 75.4609C144.183 82.2909 147.53 87.4589 154.06 87.4589C166.249 87.4589 182.126 68.4799 182.126 49.5429C182.126 43.7339 180.48 39.3539 177.855 36.2789C182.113 33.7479 186.793 32.2109 191.812 32.2109C194.724 32.2109 197.771 32.8919 200.505 34.0889L188.302 58.2909C185.459 64.1949 184.357 68.5759 184.357 71.7459C184.357 76.6439 187.214 79.1479 191.772 79.1479C198.383 79.1479 206.193 72.9979 213.974 64.2089C217.335 68.3729 222.573 70.2359 226.912 70.2359C228.286 70.2359 229.7 70.0989 231.13 69.8409C227.851 73.9759 222.396 77.0909 214.396 79.0909L108.458 105.579C92.3643 109.593 82.5273 117.538 87.2753 132.749C90.9483 129.728 97.5603 126.776 114.648 121.565L210.818 92.2469C224.885 87.9479 233.81 77.8679 237.619 67.6899C244.178 64.5209 250 58.4399 250 49.9909C249.999 40.6719 242.19 35.1069 239.347 28.3459Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_368_990">
                    <rect width="250" height="133" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="h-10 brand-logo">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 709 468"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M498.019 14.1816C523.759 1.53965 536.515 3.19864 536.802 16.0126C537.146 32.6586 534.685 54.7947 532.911 70.8117C523.358 157.867 507.399 229.003 506.198 318.386C548.241 209.543 583.477 133.894 628.895 40.7236C643.311 11.0356 652.52 16.5847 664.36 11.3217C710.465 -9.21334 712.182 3.37067 706.174 28.4827C683.809 121.493 626.549 414.341 617.799 459.434C615.281 472.481 601.096 466.95 597.434 461.848C581.018 439.139 562.485 438.784 564.543 423.683C574.84 348.502 611.906 159.875 621.574 115.429C572.322 216.401 521.242 342.628 494.986 414.199C489.437 429.397 479.312 428.282 473.021 417.162C464.154 401.541 446.937 393.566 444.076 375.107C435.096 316.419 454.373 204.555 457.06 133.785C430.234 211.093 385.216 361.184 365.481 428.996C357.359 457.054 330.245 452.477 337.452 425.13C367.425 311.327 432.007 110.052 459.921 37.6917C466.502 20.6447 483.718 21.2166 498.019 14.1816Z"
                  fill="currentColor"
                />
                <path
                  d="M334.537 0.223355C325.843 -1.89265 300.617 11.7214 285.115 14.4094C280.196 15.2674 275.505 20.4724 273.846 24.1914C249.02 81.2214 226.769 135.585 207.492 185.11C182.838 189.32 154.009 194.863 121.747 202.11C144.856 142.832 168.195 84.3664 190.961 28.1374C202.172 0.451355 172.657 -2.17961 161.216 25.8494C146.343 62.2874 118.486 130.557 87.6541 210.13C65.0021 215.684 40.978 222.033 15.866 229.287C-2.38201 234.555 -3.12469 239.417 4.76931 250.36C9.11631 256.453 18.0971 255.839 22.2151 260.181C32.8551 271.433 39.319 284.892 58.366 286.929C41.377 332.375 24.3882 379.241 9.00124 424.367C-0.665756 452.693 26.8479 458.487 37.4309 428.513C54.4769 380.195 72.4383 331.293 90.9143 282.535C106.301 278.959 143.539 270.939 177.917 263.48C150.632 338.265 132.67 395.061 125.864 422.707C124.606 428.026 126.722 430.978 127.866 433.146C137.075 446.548 145.827 447.097 157.668 463.668C160.872 468.187 171.626 470.624 175.286 459.498C200.569 383.128 226.596 311.472 250.849 247.234C260.916 245.032 279.049 240.656 290.146 224.096C309.88 194.705 315.543 200.666 320.292 191.731C326.241 180.514 322.293 169.983 301.244 172.585C301.244 172.585 293.293 173.151 278.592 174.827C301.93 114.737 322.351 63.7704 337.052 24.9314C342.088 11.7784 342.717 2.16835 334.537 0.223355Z"
                  fill="currentColor"
                />
                <path
                  d="M300.103 389.961C305.537 403.695 322.526 399.536 316.062 382.96C309.483 366.073 293.124 315.238 288.833 298.861C282.999 276.793 308.281 282.828 295.468 297.255C284.486 309.661 277.163 314.631 256.857 338.221C237.237 360.993 242.557 390.545 263.55 397.072C287.231 404.439 308.111 378.344 321.038 359.199C333.565 340.66 321.437 329.786 308.796 340.746C300.673 347.793 291.292 358.615 281.796 364.45C274.074 369.146 268.011 364.101 278.308 349.927C290.263 333.516 303.648 319.765 313.601 304.257C333.908 272.653 293.752 254.435 276.477 274.964C267.21 285.907 269.555 296.65 272.072 305.87C276.134 320.639 291.236 367.785 300.103 389.961Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="h-10 brand-logo">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 252 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M222.7 0C204.3 0 193.8 10.7 193.8 23.7C193.8 36.6 204.3 47.4 222.7 47.4C241.1 47.4 251.6 36.6 251.6 23.7C251.5 10.7 241 0 222.7 0ZM222.7 40.5C213.4 40.5 207.4 32.8 207.4 23.7C207.4 14.5 213.4 6.9 222.7 6.9C232 6.9 238 14.5 238 23.7C237.9 32.8 231.9 40.5 222.7 40.5ZM2.09961 0.9H53.1996V12.1C49.5996 9 41.8996 7.8 33.6996 7.8V38.3C33.6996 42.8 34.0996 44.1 35.7996 46.4H19.4996C21.2996 44.1 21.5996 42.8 21.5996 38.3V7.8C13.3996 7.8 5.69961 9 2.09961 12.1V0.9ZM77.6996 39.5C82.8996 39.5 91.6996 38.3 95.0996 35.2V46.4H57.8996C59.6996 44.3 59.9996 42.8 59.9996 38.5V8.9C59.9996 4.5 59.6996 3.1 57.8996 1H93.1996V12.2C89.6996 9.1 80.9996 7.8 75.6996 7.8H71.5996V19.9H74.5996C77.5996 19.9 82.1996 19.8 85.1996 18.7V27.7C82.1996 26.6 77.5996 26.5 74.5996 26.5H71.5996V39.6L77.6996 39.5ZM126.5 18.4C135.4 19.6 142.7 22.8 142.7 32.4C142.7 43.8 132 47.4 120.4 47.3C112.3 47.2 105.4 46.5 100.4 44.4V34.3C107.6 39 115 40.5 120.4 40.5C126 40.5 131.2 39.1 131.2 34.8C131.2 30.5 126.4 29.5 116.6 28C108.1 26.7 100.4 23.1 100.4 14.7C100.3 3.4 111 0 121.2 0C127.8 0 134.2 0.8 140.1 2.7V13.7C135.2 9.3 127.9 6.9 120.7 6.9C115.8 6.9 111.2 8.5 111.2 12.1C111.2 16.6 118 17.3 126.5 18.4ZM177 0C182.3 0 186.9 0.6 190.6 1.6V12.9C187 9.2 182.7 6.9 177.1 6.9C166.8 6.9 160 14.1 160 23.7C160 33.3 166.9 40.5 177.2 40.5C182.8 40.5 187.1 38.2 190.7 34.5V45.8C187 46.8 182.4 47.5 177.1 47.5C159.3 47.5 146.4 38.6 146.4 23.7C146.3 8.8 159.2 0 177 0Z"
                  fill="currentColor"
                />
                <path
                  d="M251 58.7998H220.2C215.2 58.7998 211.2 61.8998 209.3 64.1998C209.3 64.1998 204.5 69.1998 201.3 70.9998L201.2 71.0998L201.1 71.1998L201.2 71.3998H230.6C236.3 71.3998 239 69.1998 242.6 65.7998C242.6 65.7998 247.4 60.7998 251 59.1998H251.1L251.2 59.0998V58.7998H251Z"
                  fill="currentColor"
                />
                <path
                  d="M200.701 58.7998H169.901C164.901 58.7998 160.901 61.8998 159.001 64.1998C159.001 64.1998 154.201 69.1998 151.001 70.9998L150.901 71.0998L150.801 71.1998L150.901 71.3998H180.301C186.001 71.3998 188.701 69.1998 192.301 65.7998C192.301 65.7998 197.101 60.7998 200.701 59.1998H200.801L200.901 59.0998V58.7998H200.701Z"
                  fill="currentColor"
                />
                <path
                  d="M150.5 58.7998H119.7C114.7 58.7998 110.7 61.8998 108.8 64.1998C108.8 64.1998 104 69.1998 100.8 70.9998L100.7 71.0998L100.6 71.1998L100.7 71.3998H130C135.7 71.3998 138.4 69.1998 142 65.7998C142 65.7998 146.8 60.7998 150.4 59.1998H150.5L150.6 59.0998V58.7998H150.5Z"
                  fill="currentColor"
                />
                <path
                  d="M100.201 58.7998H69.4008C64.4008 58.7998 60.4008 61.8998 58.5008 64.1998C58.5008 64.1998 53.7008 69.1998 50.5008 70.9998L50.4008 71.0998L50.3008 71.1998L50.4008 71.3998H79.8008C85.5008 71.3998 88.2008 69.1998 91.8008 65.7998C91.8008 65.7998 96.6008 60.7998 100.201 59.1998H100.301L100.401 59.0998V58.7998H100.201Z"
                  fill="currentColor"
                />
                <path
                  d="M50 58.7998H19.1C14.1 58.7998 10.1 61.8998 8.2 64.1998C8.2 64.1998 3.4 69.1998 0.2 70.9998L0.1 71.0998L0 71.1998L0.1 71.3998H29.5C35.2 71.3998 37.9 69.1998 41.5 65.7998C41.5 65.7998 46.3 60.7998 49.9 59.1998H50L50.1 59.0998L50 58.7998Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="h-16 brand-logo">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 248 248"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M247.366 247.366V0.5H0.5V247.366H247.366Z"
                  stroke="currentColor"
                />
                <path
                  d="M222.893 162.549C223.819 137.462 210.782 123.485 187.19 123.485C165.33 123.485 152.62 139.377 152.62 163.039C152.62 187.99 165.33 202.746 187.19 202.746H225.087V188.331H213.27C218.639 183.041 222.468 173.869 222.893 162.549ZM177.388 163.039C177.388 149.796 181.135 143.443 187.19 143.443C193.246 143.443 196.997 149.796 196.997 163.039C196.997 176.273 193.246 182.621 187.19 182.621C181.135 182.621 177.388 176.273 177.388 163.039Z"
                  fill="currentColor"
                />
                <path
                  d="M76.3098 162.37C85.0321 157.81 87.4936 152.314 87.3843 143.701C87.2444 132.618 79.3309 124.617 63.2023 124.617H24.7324V202.82H63.8669C77.4247 202.82 89.2731 195.388 89.2731 180.903C89.2731 171.298 84.6168 165.006 76.3098 162.37ZM49.8762 141.397H54.9959C59.4817 141.397 61.882 144.357 61.882 148.414C61.882 152.471 59.4817 155.759 54.9959 155.759H49.8762V141.397ZM56.0496 186.032H49.8762V170.218H56.0496C60.5922 170.218 63.3335 173.422 63.3335 177.965C63.3335 182.516 60.5922 186.032 56.0496 186.032Z"
                  fill="currentColor"
                />
                <path
                  d="M153.587 202.598C152.891 197.968 150.391 192.695 146.609 186.976C148.161 185.503 149.739 183.942 151.37 182.237L142.28 171.783C140.829 173.147 139.412 174.485 138.035 175.779C135.792 173.16 133.353 170.48 130.729 167.743C138.612 162.628 142.32 157.548 142.32 149.442C142.32 141.358 134.161 133.877 121.054 133.877C107.321 133.877 100.291 142.346 100.291 151.497C100.291 156.791 103.5 161.417 107.155 165.465C100.3 169.859 94.3887 175.683 93.9208 183.177C93.0814 196.647 103.185 204.241 115.86 203.704C121.006 203.485 126.843 201.653 133.558 197.399C134.642 199.367 135.416 201.15 135.687 202.598H153.587ZM121.679 145.245C125.116 145.245 127.643 147.732 126.991 151.261C126.663 152.983 125.505 155.423 121.002 158.116C118.142 155.344 116.135 153.062 116.135 150.906C116.135 147.536 118.256 145.245 121.679 145.245ZM113.346 186.876C111.431 184.851 110.443 179.88 116.94 175.74C119.633 178.722 122.798 182.385 125.776 186.154C120.8 189.464 116.643 190.369 113.346 186.876Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">How You Are Paid</h2>
            <p className="text-gray-400 mt-2">
              Collect your earnings through secure and popular methods.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <a
              href="/faq#cash"
              className="group flex flex-col bg-sky-950 hover:bg-sky-900 transition-colors p-8 rounded-xl "
            >
              <div className="flex flex-row items-center gap-4">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500/20">
                  <PoundSterlingIcon className="text-blue-400 h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-white">Cash</h3>
              </div>
              <p className="mt-2 text-gray-400 text-left mb-4">
                Get paid directly to your bank account or PayPal for easy
                access.
              </p>
              <span className="bg-white mt-auto flex items-center justify-center text-gray-900 font-semibold px-10 py-3 rounded-full w-max">
                Learn more{' '}
                <ChevronRight className="size-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href="/faq#gift-cards"
              className="group flex flex-col bg-sky-950 hover:bg-sky-900 transition-colors p-8 rounded-xl "
            >
              <div className="flex flex-row items-center gap-4">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500/20">
                  <GiftIcon className="text-blue-400 h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-white">Gift Cards</h3>
              </div>
              <p className="mt-2 text-gray-400 text-left mb-4">
                Choose from a variety of popular retailers and get gift cards
                delivered instantly.
              </p>
              <span className="bg-white mt-auto flex items-center justify-center text-gray-900 font-semibold px-10 py-3 rounded-full w-max">
                Learn more{' '}
                <ChevronRight className="size-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href="/faq#nft-collectibles"
              className="group flex flex-col bg-sky-950 hover:bg-sky-900 transition-colors p-8 rounded-xl "
            >
              <div className="flex flex-row items-center gap-4">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500/20">
                  <Blocks className="text-blue-400 h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-white">NFTs</h3>
              </div>
              <p className="mt-2 text-gray-400 text-left mb-4">
                You can get NFTs and trade in our exclusive and secure
                blockchain platform with other users or sell them on the
                marketplace.
              </p>
              <span className="bg-white mt-auto flex items-center justify-center text-gray-900 font-semibold px-10 py-3 rounded-full w-max">
                Learn more{' '}
                <ChevronRight className="size-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="surveys" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Available Surveys</h2>
            <p className="text-gray-400 mt-2">
              Find a survey that interests you and start earning.
            </p>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="glass-effect p-6 rounded-lg flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Mobile Banking Habits
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Share your experience with mobile banking apps.
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <span className="block text-sm text-gray-400">Time</span>
                  <span className="block font-semibold text-white">15 min</span>
                </div>
                <div className="text-center">
                  <span className="block text-sm text-gray-400">Reward</span>
                  <span className="block font-semibold text-blue-400">
                    500 Tokens
                  </span>
                </div>
                <a
                  href="#sign-up"
                  className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition"
                >
                  Take Survey
                </a>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-lg flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Weekly Shopping Trends
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Tell us about your grocery shopping routine.
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <span className="block text-sm text-gray-400">Time</span>
                  <span className="block font-semibold text-white">10 min</span>
                </div>
                <div className="text-center">
                  <span className="block text-sm text-gray-400">Reward</span>
                  <span className="block font-semibold text-blue-400">
                    350 Tokens
                  </span>
                </div>
                <a
                  href="#sign-up"
                  className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition"
                >
                  Take Survey
                </a>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-lg flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Streaming Service Feedback
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  What do you watch and where do you watch it?
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <span className="block text-sm text-gray-400">Time</span>
                  <span className="block font-semibold text-white">20 min</span>
                </div>
                <div className="text-center">
                  <span className="block text-sm text-gray-400">Reward</span>
                  <span className="block font-semibold text-blue-400">
                    700 Tokens
                  </span>
                </div>
                <a
                  href="#sign-up"
                  className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition"
                >
                  Take Survey
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Loved by Users Worldwide
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-effect p-8 rounded-xl">
              <p className="text-gray-300">
                "I love Surveystream! It's an easy way to make my spare time
                productive. I've already redeemed two Amazon gift cards just
                from taking surveys on my commute."
              </p>
              <div className="mt-4 flex items-center">
                <img
                  src="https://i.pravatar.cc/40?u=a042581f4e29026704d"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <p className="font-semibold text-white">Sarah J.</p>
                  <p className="text-sm text-gray-400">Active User</p>
                </div>
              </div>
            </div>
            <div className="glass-effect p-8 rounded-xl">
              <p className="text-gray-300">
                "Finally, a survey site that actually respects your time and
                rewards you fairly. The platform is super sleek and easy to use.
                Highly recommended!"
              </p>
              <div className="mt-4 flex items-center">
                <img
                  src="https://i.pravatar.cc/40?u=a042581f4e29026704e"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <p className="font-semibold text-white">Mike R.</p>
                  <p className="text-sm text-gray-400">Active User</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
