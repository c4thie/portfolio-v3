import { Tech } from "@/constants";

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div whileInView={"visible"}>
      <h2 className="md:text-[106px] text-[66px] font-catavalo font-semibold">
        Toolbox
      </h2>
      <div className="mt-8 space-y-4">
        {Tech.map((skill, i) => (
          <div className="md:w-[50vw] w-64" key={i}>
            <motion.h3
              initial={{
                opacity: 0,
              }}
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 1 + i * 0.2,
                  },
                },
              }}
            >
              {skill.name}
            </motion.h3>
            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
              <motion.div
                initial={{
                  scaleX: 0,
                  originX: 0,
                }}
                variants={{
                  visible: {
                    scaleX: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + i * 0.2,
                    },
                  },
                }}
                className="h-full bg-[#000] rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
