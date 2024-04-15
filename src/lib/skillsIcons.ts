import Angular from "@/iconos/Angular.astro";
import Tailwind from "@/iconos/Tailwind.astro";
import Css from "@/iconos/Css.astro";
import Html from "@/iconos//Html.astro";
import Node from "@/iconos/Node.astro";
import Javascript from "@/iconos/Javascript.astro";
import Csharp from "@/iconos/Csharp.astro";
import Sql from "@/iconos/Sql.astro";
import Typescript from "@/iconos/Typescript.astro";
import NotFound from "@/iconos/NotFound.astro";
import Astro from "@/iconos/Astro.astro";
import React from "@/iconos/React.astro";

export default function GetSkillIcon(skill: string) {
  switch (skill) {
    case "angular":
      return Angular;
    case "tailwind":
      return Tailwind;
    case "css":
      return Css;
    case "html":
      return Html;
    case "node":
      return Node;
    case "javascript":
      return Javascript;
    case "csharp":
      return Csharp;
    case "sql":
      return Sql;
    case "typescript":
      return Typescript;
    case "astro":
      return Astro;
    case "react":
      return React;
    default:
      return NotFound;
  }
}
