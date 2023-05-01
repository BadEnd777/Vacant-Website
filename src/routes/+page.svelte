<script>
  import { FEATURES } from "../data/features.js";
  import Icon from "svelte-icons-pack";
  import Layout from "../components/+Layout.svelte";
  import Link from "../components/Link.svelte";
  import Button from "../components/Button.svelte";
  import BGLight from "../lib/images/light.png";
  import BGDark from "../lib/images/dark.png";
  import Install from "../lib/videos/install.mp4";
  import Preview1 from "../lib/images/preview/1.png";
  import Preview2 from "../lib/images/preview/2.png";
  import Preview3 from "../lib/images/preview/3.png";
  import Preview4 from "../lib/images/preview/4.png";
  import Preview5 from "../lib/images/preview/5.png";
</script>

<Layout>
  <div
    id="overview"
    class="relative flex flex-col justify-center items-center min-h-screen"
  >
    <img
      src={BGLight}
      alt="Light"
      class="block dark:hidden absolute top-0 left-0 w-full h-full object-cover z-0"
    />
    <img
      src={BGDark}
      alt="Dark"
      class="hidden dark:block absolute top-0 left-0 w-full h-full object-cover z-0"
    />
    <div class="container mx-auto px-4 py-4 z-10">
      <div class="flex flex-col justify-center items-center">
        <h1
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-center uppercase"
        >
          vacant
        </h1>
        <p
          class="text-center text-lg md:text-xl lg:text-2xl font-semibold mt-4 max-w-4xl text-gray-light dark:text-gray-dark"
        >
          Vacant is a modify version of the <Link
            text="VRCSDK"
            href="https://vrchat.com/home/download"
            className="text-accent"
          />
          by <Link
            text="VRChat"
            href="https://vrchat.com/"
            className="text-dark-100 dark:text-light-100"
          />. The purpose of this mod is to make it easier to create avatar for
          <Link
            text="VRChat"
            href="https://vrchat.com/"
            className="text-dark-100 dark:text-light-100"
          />. The mod is also published for using and sharing with the
          community. If you have any questions or suggestions, please join the
          discord server.
        </p>
        <Button
          text="Join Discord"
          href="https://discord.gg/2Yb8G8G"
          className="mt-8"
        />
      </div>
    </div>
  </div>
  <div
    id="installation"
    class="flex flex-col items-center py-20 px-4 min-h-screen"
  >
    <h1
      class="text-3xl md:text-4xl lg:text-5xl font-bold text-center uppercase"
    >
      Installation
    </h1>
    <p
      class="text-center text-lg md:text-xl lg:text-2xl font-semibold mt-4 text-gray-light dark:text-gray-dark"
    >
      Here are the steps to install vacant.
    </p>
    <div class="flex justify-center items-center mt-2 md:mt-4 lg:mt-8">
      <video
        src={Install}
        controls
        class="w-full max-w-4xl rounded-md border-2 border-light-50 dark:border-dark-50"
      >
        <track kind="captions" />
      </video>
    </div>
    <div class="flex flex-col w-full mt-8 max-w-7xl">
      <p class="text-lg">1. Download the Unity Hub and install it.</p>
      <p class="text-lg mt-2">
        2. Download the Unity Editor version
        <Link
          text="2019.4.31f1"
          href="https://unity3d.com/get-unity/download/archive"
          className="text-accent font-semibold"
        />
        and install it.
      </p>
      <p class="text-lg mt-2">
        3. Open the Unity Hub and click the New Project button.
      </p>
      <p class="text-lg mt-2">
        4. Select the 3D template and select the Unity Editor version
        <Link
          text="2019.4.31f1"
          href="https://unity3d.com/get-unity/download/archive"
          className="text-accent font-semibold"
        />. Then click the Create Project button.
      </p>
      <p class="text-lg mt-2">
        5. Download the vacant and drag the vacant.unitypackage into the Unity
        Editor.
      </p>
    </div>
  </div>
  <div id="features" class="flex flex-col items-center py-20 px-4 min-h-screen">
    <h1
      class="text-3xl md:text-4xl lg:text-5xl font-bold text-center uppercase"
    >
      Features
    </h1>
    <p
      class="text-center text-lg md:text-xl lg:text-2xl font-semibold mt-4 text-gray-light dark:text-gray-dark"
    >
      Here are some of the features that we have in vacant.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {#each FEATURES as feature}
        <div
          class="
          bg-light-50 dark:bg-dark-50
          shadow-[0px_0px_20px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_20px_rgba(50,50,50,0.5)]
          w-full h-full lg:w-[400px] lg:h-[300px]
          px-4 py-6 rounded-md
          md:hover:scale-105 transition-all duration-200 ease-in-out"
        >
          <div class="flex flex-col justify-center items-center">
            <div
              class="bg-accent w-[100px] h-[100px] rounded-full flex justify-center items-center"
            >
              <Icon src={feature.icon} color="white" size="32" />
            </div>
            <h2 class="text-xl font-bold mt-4 text-center">{feature.title}</h2>
            <p class="text-center mt-2 text-gray-light dark:text-gray-dark">
              {feature.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div id="preview" class="flex flex-col items-center py-20 min-h-screen">
    <h1
      class="text-3xl md:text-4xl lg:text-5xl font-bold text-center uppercase"
    >
      Preview
    </h1>
    <p
      class="text-center text-lg md:text-xl lg:text-2xl font-semibold mt-4 text-gray-light dark:text-gray-dark"
    >
      Here are some of the previews that we have in vacant.
    </p>
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8 w-full justify-center items-center max-w-screen-2xl"
    >
      <img
        src={Preview3}
        alt="Preview 3"
        class="lg:max-w-[300px] m-4 rounded-md"
      />
      <img
        src={Preview1}
        alt="Preview 4"
        class="lg:max-w-[300px] m-4 rounded-md"
      />
      <img
        src={Preview5}
        alt="Preview 5"
        class="lg:max-w-[300px] m-4 rounded-md"
      />
      <img
        src={Preview2}
        alt="Preview 2"
        class="lg:max-w-[300px] m-4 rounded-md"
      />
      <img
        src={Preview4}
        alt="Preview 1"
        class="lg:max-w-[300px] m-4 rounded-md"
      />
    </div>
  </div>
</Layout>
