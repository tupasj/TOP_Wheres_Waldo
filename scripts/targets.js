import { openModal } from "./modal.js";

const targets = () => {
  const target1Discovered = () => {
    const target1SidebarImg = document.querySelector("#target1-sidebar > img");
    target1SidebarImg.style.opacity = 0.25;
    const target1SidebarText = document.querySelector("#target1-sidebar > span");
    target1SidebarText.style.textDecoration = 'line-through';
    openModal();
    console.log("target 1 discovered");
  };

  const target2Discovered = () => {
    const target2SidebarImg = document.querySelector("#target2-sidebar > img");
    target2SidebarImg.style.opacity = 0.25;
    const target2SidebarText = document.querySelector("#target2-sidebar > span");
    target2SidebarText.style.textDecoration = 'line-through';
    console.log("target 2 discovered");
  };

  const target3Discovered = () => {
    const target3SidebarImg = document.querySelector("#target3-sidebar > img");
    target3SidebarImg.style.opacity = 0.25;
    const target3SidebarText = document.querySelector("#target3-sidebar > span");
    target3SidebarText.style.textDecoration = 'line-through';
    console.log("target 3 discovered");
  };

  const target1 = document.querySelector(".target1");
  const target2 = document.querySelector(".target2");
  const target3 = document.querySelector(".target3");

  target1.addEventListener("click", target1Discovered);
  target2.addEventListener("click", target2Discovered);
  target3.addEventListener("click", target3Discovered);
};

export { targets };