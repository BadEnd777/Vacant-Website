import File from 'svelte-icons-pack/fa/FaSolidFile';
import Desktop from 'svelte-icons-pack/fa/FaSolidDesktop';
import FileImport from 'svelte-icons-pack/fa/FaSolidFileImport';
import Tools from 'svelte-icons-pack/fa/FaSolidTools';
import Ban from 'svelte-icons-pack/fa/FaSolidBan';
import EllipsisH from 'svelte-icons-pack/fa/FaSolidEllipsisH';

export const FEATURES = [
    {
        icon: File,
        title: "Light Weight",
        description: "vacant is a light weight mod that only contains the necessary files to create avatar for VRChat.",
    },
    {
        icon: Desktop,
        title: "Thumbnail",
        description: "we has a built-in thumbnail creator that allows you to change the thumbnail of your avatar.",
    },
    {
        icon: FileImport,
        title: "Import Assets",
        description: "you can import assets from url to your project.\n(only support .unitypackage)",
    },
    {
        icon: Tools,
        title: "Tools",
        description: "we has a lot of tools that can help you to create avatar for VRChat.",
    },
    {
        icon: Ban,
        title: "Unban",
        description: "vacant can unban temporary banned in your project.",
    },
    {
        icon: EllipsisH,
        title: "More",
        description: "we will add more features in the future.",
    },
];