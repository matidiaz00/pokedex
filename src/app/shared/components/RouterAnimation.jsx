import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function RouterAnimation() {

  const { pathname } = useLocation();

  const PageLayout = ({ children }) => children;

    const pageVariants = {
        initial: {
            opacity: 0
        },
        in: {
            opacity: 1
        },
        out: {
            opacity: 0
        }
    };

    const pageTransition = {
        type: "tween",
        ease: "linear",
        duration: 0.5
    };

    return (
        <PageLayout>
            <motion.div
                key={pathname}
                initial="initial"
                animate="in"
                variants={pageVariants}
                transition={pageTransition}
            >
                <Outlet />
            </motion.div>
        </PageLayout>
    );
};

export default RouterAnimation;