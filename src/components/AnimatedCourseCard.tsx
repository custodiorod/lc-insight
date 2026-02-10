import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface AnimatedCourseCardProps {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  index: number;
}

export function AnimatedCourseCard({
  id,
  title,
  shortDescription,
  fullDescription,
  image,
  index,
}: AnimatedCourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <Link to={`/curso/${id}`} className="group block">
        <Card className="overflow-hidden h-full border-2 hover:border-[#0066CC]/30 transition-all duration-300">
          {/* Imagem com animação */}
          <motion.div
            className="h-48 bg-gray-200 overflow-hidden relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            {/* Badge animado */}
            <motion.div
              className="absolute top-3 right-3 bg-[#FFD700] text-black px-3 py-1 rounded-full text-xs font-bold"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: index * 0.1 + 0.3, duration: 0.5 }}
            >
              NOVO
            </motion.div>
          </motion.div>

          <CardHeader>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <CardTitle className="text-xl group-hover:text-[#0066CC] transition-colors">
                {title}
              </CardTitle>
              <CardDescription>{shortDescription}</CardDescription>
            </motion.div>
          </CardHeader>

          <CardContent className="space-y-4">
            <motion.p
              className="text-sm text-gray-600 line-clamp-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {fullDescription}
            </motion.p>

            {/* Features animadas */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {["Prático", "Certificado", "Iniciantes"].map((feature) => (
                <motion.span
                  key={feature}
                  className="text-xs bg-blue-50 text-[#0066CC] px-2 py-1 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  ✓ {feature}
                </motion.span>
              ))}
            </motion.div>
          </CardContent>

          <CardFooter>
            <motion.div className="w-full">
              <motion.button
                className="w-full bg-[#0066CC] hover:bg-[#FFD700] hover:text-black text-white font-medium py-2 px-4 rounded-md transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Quero este curso{" "}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 0.5 }}
                  className="inline-block"
                >
                  <ChevronRight className="h-4 w-4 ml-1 inline" />
                </motion.div>
              </motion.button>
            </motion.div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
