import { useInView } from "react-intersection-observer";

export default function FadeInWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.01,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`h-fit w-fit hidden-object ${inView && "show-object"}`}
    >
      {children}
    </div>
  );
}
