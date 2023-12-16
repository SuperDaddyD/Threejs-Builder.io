"use client";
import { Builder } from "@builder.io/react";
import BotPage from "./components/Bots/BotPage";
import Counter from "./components/Counter/Counter";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(BotPage, {
  name: "BotPage",
});
