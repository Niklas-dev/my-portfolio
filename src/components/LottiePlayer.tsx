"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

export default function LottiePlayer({
  src,
  classes,
  autoplay,
  loop,
  testID,
}: {
  src: string;
  classes: string;
  autoplay?: boolean;
  loop?: boolean;
  testID?: string;
}) {
  return (
    <Player
      data-testid={testID}
      className={classes}
      autoplay
      loop={loop}
      src={src}
    ></Player>
  );
}
