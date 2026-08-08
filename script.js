const links = [
  "https://www.minecraftlist.com/servers/zetrexmc/vote",
  "https://minecraftservers.org/server/674808",
  "https://minecraft-mp.com/server-s347648",
  "https://minecraft-server-list.com/server/514145/",
  "https://topminecraftservers.org/server/41117",
  "https://play-minecraft-servers.com/minecraft-servers/zetrexmc-network/"
];

document.addEventListener("DOMContentLoaded", () => {
  const buttons = Array.from(document.querySelectorAll("button")).slice(0, links.length);
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      window.location.href = links[index];
    });
  });
});
