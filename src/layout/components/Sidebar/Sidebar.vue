<template>
  <div class="sidebar-box">
    <div class="lay-sidebar" :style="{ height: Side.screenH }">
      <div class="card">
        <div class="card-borders">
          <div class="border-top"></div>
          <div class="border-right"></div>
          <div class="border-bottom"></div>
          <div class="border-left"></div>
        </div>
        <div class="card-content">
          <img
            src="../../../assets/imgs/app.png"
            class="avatar"
          />
          <div class="username">litchi</div>
          <div class="social-icons">
            <a class="social-icon" href="" target="_blank">
              <svg
                t="1580195454483"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1157"
                width="18"
                height="18"
              >
                <path
                  d="M123.52064 667.99143l344.526782 229.708899 0-205.136409-190.802457-127.396658zM88.051421 585.717469l110.283674-73.717469-110.283674-73.717469 0 147.434938zM556.025711 897.627196l344.526782-229.708899-153.724325-102.824168-190.802457 127.396658 0 205.136409zM512 615.994287l155.406371-103.994287-155.406371-103.994287-155.406371 103.994287zM277.171833 458.832738l190.802457-127.396658 0-205.136409-344.526782 229.708899zM825.664905 512l110.283674 73.717469 0-147.434938zM746.828167 458.832738l153.724325-102.824168-344.526782-229.708899 0 205.136409zM1023.926868 356.00857l0 311.98286q0 23.402371-19.453221 36.566205l-467.901157 311.98286q-11.993715 7.459506-24.57249 7.459506t-24.57249-7.459506l-467.901157-311.98286q-19.453221-13.163834-19.453221-36.566205l0-311.98286q0-23.402371 19.453221-36.566205l467.901157-311.98286q11.993715-7.459506 24.57249-7.459506t24.57249 7.459506l467.901157 311.98286q19.453221 13.163834 19.453221 36.566205z"
                  p-id="1158"
                  fill="#ffffff"
                ></path>
              </svg>
            </a>
            <a class="social-icon" href="" target="_blank">
              <svg
                t="1580195507173"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1535"
                width="18"
                height="18"
              >
                <path
                  d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z"
                  p-id="1536"
                  fill="#ffffff"
                ></path>
              </svg>
            </a>
            <a class="social-icon" href="" target="_blank">
              <svg
                t="1580195523726"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1817"
                width="18"
                height="18"
              >
                <path
                  d="M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429 0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429 148.260571t-65.974857 141.970286-105.398857 120.32-147.456 83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857 19.968 2.267429 44.544 2.267429 128.585143 0 229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857 2.852571 34.889143 2.852571 24.576 0 48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857 21.723429 83.456 23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286 25.161143-93.110857 69.12 85.138286 168.301714 136.265143t212.260571 56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571 53.979429-130.56t130.56-53.979429q80.018286 0 134.875429 58.294857 62.317714-11.995429 117.174857-44.544-21.138286 65.682286-81.115429 101.741714 53.174857-5.705143 106.276571-28.598857z"
                  p-id="1818"
                  fill="#ffffff"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <h2 class="logo">litchi</h2>
  </div>
</template>

<script lang="ts" setup>
type sideType = {
  screenH: string;
};
const Side = reactive<sideType>({
  screenH: "0",
});
onBeforeMount(() => {
  const height = `${document.documentElement.clientHeight}`;
  Side.screenH = height + "px";
});
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Lato);
.sidebar-box {
  height: 100vh;
  width: 300px;
  position: relative;
  background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
}
.lay-sidebar {
  height: 100vh;
  width: 300px;
  margin: 0;
  display: grid;
  place-items: center;
  background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
  position: absolute;
  z-index: 1;
}

.card {
  --card-bg-color: hsl(240, 31%, 25%);
  --card-bg-color-transparent: hsla(240, 31%, 25%, 0.7);
  position: relative;
  width: 250px;

  .card-borders {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .border-top {
      position: absolute;
      top: 0;
      width: 100%;
      height: 2px;
      background: var(--card-bg-color);
      transform: translateX(-100%);
      animation: slide-in-horizontal 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    }

    .border-right {
      position: absolute;
      right: 0;
      width: 2px;
      height: 100%;
      background: var(--card-bg-color);
      transform: translateY(100%);
      animation: slide-in-vertical 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    }

    .border-bottom {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: var(--card-bg-color);
      transform: translateX(100%);
      animation: slide-in-horizontal-reverse 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    }

    .border-left {
      position: absolute;
      top: 0;
      width: 2px;
      height: 100%;
      background: var(--card-bg-color);
      transform: translateY(-100%);
      animation: slide-in-vertical-reverse 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0 40px 0;
    font-family: Lato, sans-serif;
    background: var(--card-bg-color-transparent);
    background-image: url(../../../assets/background/bg.jpeg);
    box-shadow: 0 0px 0.6px rgba(0, 0, 0, 0.028), 0 0px 1.3px rgba(0, 0, 0, 0.04), 0 0px 2.5px rgba(0, 0, 0, 0.05),
      0 0px 4.5px rgba(0, 0, 0, 0.06), 0 0px 8.4px rgba(0, 0, 0, 0.072), 0 0px 20px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: scale(0.6);
    animation: bump-in 0.5s 0.8s forwards;

    .avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin-bottom: 40px;
      opacity: 0;
      transform: scale(0.6);
      animation: bump-in 0.5s 1s forwards;
    }

    .username {
      position: relative;
      font-size: 26px;
      letter-spacing: 2px;
      margin-bottom: 40px;
      color: transparent;
      animation: fill-text-white 1.2s 2s forwards;
     

      &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: black;
        // background: #85bfda;
        transform: scaleX(0);
        transform-origin: left;
        animation: slide-in-out 1.2s 1.2s cubic-bezier(0.75, 0, 0, 1) forwards;
      }
    }

    .social-icons {
      display: flex;

      .social-icon {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.5em;
        height: 2.5em;
        margin: 0 15px;
        border-radius: 50%;
        color: white;
        text-decoration: none;

        @for $i from 1 through 3 {
          &:nth-child(#{$i}) {
            &::before {
              animation-delay: 2s + 0.1s * $i;
            }

            &::after {
              animation-delay: 2.1s + 0.1s * $i;
            }

            svg {
              animation-delay: 2.2s + 0.1s * $i;
            }
          }
        }

        &::before,
        &::after {
          position: absolute;
          content: "";
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: inherit;
          transform: scale(0);
        }

        &::before {
          background: #f7f1e3;
          animation: scale-in 0.5s cubic-bezier(0.75, 0, 0, 1) forwards;
        }

        &::after {
          background: #2c3e50;
          animation: scale-in 0.5s cubic-bezier(0.75, 0, 0, 1) forwards;
        }

        svg {
          z-index: 1;
          transform: scale(0);
          animation: scale-in 0.5s cubic-bezier(0.75, 0, 0, 1) forwards;
        }
      }
    }
  }
}
.logo{
  position: absolute;
  width: 100%;
  z-index: 10;
  font-family: 'zcool';
  opacity: 0.6;
  text-align: center;
  letter-spacing: 6px;
}

@keyframes bump-in {
  50% {
    transform: scale(1.05);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slide-in-horizontal {
  50% {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
  }
}

@keyframes slide-in-horizontal-reverse {
  50% {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}

@keyframes slide-in-vertical {
  50% {
    transform: translateY(0);
  }

  to {
    transform: translateY(-100%);
  }
}

@keyframes slide-in-vertical-reverse {
  50% {
    transform: translateY(0);
  }

  to {
    transform: translateY(100%);
  }
}

@keyframes slide-in-out {
  50% {
    transform: scaleX(1);
    transform-origin: left;
  }

  50.1% {
    transform-origin: right;
  }

  100% {
    transform: scaleX(0);
    transform-origin: right;
  }
}

@keyframes fill-text-white {
  to {
    color: white;
  }
}

@keyframes scale-in {
  to {
    transform: scale(1);
  }
}
</style>
