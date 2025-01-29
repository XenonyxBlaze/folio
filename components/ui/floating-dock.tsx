import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
    </>
  );
};


const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  const mouseY = useMotionValue(Infinity);
  function chunkArray<T>(array: T[], chunkSize: number = 7): T[][] {
    const result: T[][] = [];
    
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    
    return result;
  }

  const chunkedArrays = chunkArray(items);
  return (
    <motion.div
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
        
      }
      onMouseLeave={() => {
        mouseX.set(Infinity);
        mouseY.set(Infinity);
      }}

      className={cn(
        "mx-auto flex flex-col",
        className
      )}
    >
      {
        chunkedArrays.map((chunk, index) => (
          <div key={index} className="flex items-center justify-center gap-4 h-16   px-4 py-3 justify-center">
            {chunk.map((item, index) => (
              <IconContainer
                key={index}
                mouseX={mouseX}
                mouseY={mouseY}
                title={item.title}
                icon={item.icon}
                href={item.href}
              />
            ))}
          </div>
        ))
      }
      
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  mouseY,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Calculate the distance from the mouse to the center of the icon container in both x and y directions
  const distanceX = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const distanceY = useTransform(mouseY, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });

  // Combine x and y distances to calculate the Euclidean distance (distance from mouse to icon center)
  const distance = useTransform([distanceX, distanceY], ([x, y]) => {
    return Math.sqrt(x * x + y * y); // Euclidean distance formula
  });

  // Scale the icon container based on the distance
  const widthTransform = useTransform(distance, [0, 150], [80, 40]);
  const heightTransform = useTransform(distance, [0, 150], [80, 40]);

  // Scale the icon inside the container based on the distance
  const widthTransformIcon = useTransform(distance, [0, 150], [40, 20]);
  const heightTransformIcon = useTransform(distance, [0, 150], [40, 20]);

  // Apply spring animations for smooth transitions
  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}