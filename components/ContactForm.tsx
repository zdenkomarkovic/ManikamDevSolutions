"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
  FormLabel,
} from "./ui/form";
import { Input } from "./ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "./ui/textarea";
import { sendMail } from "@/lib/send-mail";
import { toast } from "sonner";
import { Button } from "./ui/button";
import {
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaViber,
  FaWhatsappSquare,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useMessages } from "@/lib/MessagesContext";
import { useRouter } from "next/navigation";
import { useLocale } from "@/lib/LocaleContext";

export default function ContactForm() {
  const intl = useMessages();
  const router = useRouter();
  const { locale } = useLocale();

  const contactFormSchema = z.object({
    name: z.string().min(2, {
      message: intl.formatMessage({ id: "contact.validation.nameRequired" }),
    }),
    phone: z.string().min(2, {
      message: intl.formatMessage({ id: "contact.validation.phoneRequired" }),
    }),
    email: z.string().email({
      message: intl.formatMessage({ id: "contact.validation.emailInvalid" }),
    }),
    message: z.string().min(10, {
      message: intl.formatMessage({
        id: "contact.validation.messageMinLength",
      }),
    }),
  });

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const mailText = `Ime: ${values.name}\n Telefon: ${values.phone}\n Email: ${values.email}\n Poruka: ${values.message}`;
    const response = await sendMail({
      email: values.email,
      subject: "New Contact Us Form",
      text: mailText,
    });

    if (response?.messageId) {
      // Redirect to thank you page after successful submission
      router.push(`/${locale}/hvala`);
    } else {
      toast.error(intl.formatMessage({ id: "contact.toast.error" }));
    }
    form.reset();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="container mx-auto pt-28 pb-16 px-3 md:px-16 md:py-32">
      <div className="flex justify-center mb-12">
        <motion.h1
          className="text-[45px] leading-tight md:text-8xl font-extrabold inline-block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {intl.formatMessage({ id: "contact.hero.title" })}
        </motion.h1>
      </div>

      <motion.p
        className="text-center text-gray-100 mb-16 max-w-2xl mx-auto "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {intl.formatMessage({ id: "contact.hero.subtitle" })}
      </motion.p>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="space-y-6" variants={cardVariants}>
          {/* USA Office */}
          {/* <motion.div
            className="p-6 bg-gradient-to-br from-gray-900 via-gray-700 to-orange-600 rounded-2xl shadow-lg"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaMapMarkerAlt className="text-2xl text-orange-400" />
              <h3 className="text-2xl font-bold text-gray-100">
                {intl.formatMessage({ id: "contact.offices.usa" })}
              </h3>
            </div>
            <div className="space-y-4">
              <motion.a
                href="tel:+12408103730"
                className="flex items-center gap-4 p-3 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-all"
                whileHover={{ x: 5 }}
              >
                <FaPhone className="text-xl text-orange-600" />
                <span className="font-semibold text-gray-900">
                  +1 240 810 3730
                </span>
              </motion.a>
              <motion.a
                href="viber://chat?number=%2B12408103730"
                className="flex items-center gap-4 p-3 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-all"
                whileHover={{ x: 5 }}
              >
                <FaViber className="text-2xl text-purple-600" />
                <span className="font-semibold text-gray-900">
                  +1 240 810 3730
                </span>
              </motion.a>
              <motion.a
                href="https://wa.me/12408103730"
                className="flex items-center gap-4 p-3 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-all"
                whileHover={{ x: 5 }}
              >
                <FaWhatsappSquare className="text-2xl text-green-600" />
                <span className="font-semibold text-gray-900">
                  +1 240 810 3730
                </span>
              </motion.a>
            </div>
          </motion.div> */}

          {/* Serbia Office */}
          <motion.div
            className="p-6 bg-gradient-to-br from-gray-900 via-gray-700 to-orange-600 rounded-2xl shadow-lg"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaMapMarkerAlt className="text-2xl text-orange-400" />
              <h3 className="text-2xl font-bold text-gray-100">
                {intl.formatMessage({ id: "contact.offices.serbia" })}
              </h3>
            </div>
            <div className="space-y-4">
              <motion.a
                href="tel:+381641967267"
                className="flex items-center gap-4 p-3 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-all"
                whileHover={{ x: 5 }}
              >
                <FaPhone className="text-xl text-orange-600" />
                <span className="font-semibold text-gray-900">
                  +381 64 196 7267
                </span>
              </motion.a>
              <motion.a
                href="viber://chat?number=%2B381641967267"
                className="flex items-center gap-4 p-3 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-all"
                whileHover={{ x: 5 }}
              >
                <FaViber className="text-2xl text-purple-600" />
                <span className="font-semibold text-gray-900">
                  +381 64 196 7267
                </span>
              </motion.a>
              <motion.a
                href="https://wa.me/381641967267"
                className="flex items-center gap-4 p-3 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-all"
                whileHover={{ x: 5 }}
              >
                <FaWhatsappSquare className="text-2xl text-green-600" />
                <span className="font-semibold text-gray-900">
                  +381 64 196 7267
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Email and Social */}
          <motion.div
            className="p-6 bg-gradient-to-br from-gray-900 via-gray-700 to-orange-600 rounded-2xl shadow-lg"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
            }}
          >
            <motion.a
              href="mailto:manikamwebsolutions@gmail.com"
              className="flex items-center gap-4 p-3 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-xl hover:shadow-lg transition-all mb-6"
              whileHover={{ x: 5 }}
            >
              <FaEnvelope className="text-xl text-orange-600" />
              <span className="font-semibold text-gray-900 text-sm md:text-base">
                manikamwebsolutions@gmail.com
              </span>
            </motion.a>

            <div className="flex justify-center gap-8 pt-4">
              <motion.a
                href="https://www.instagram.com/manikam.web.solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaInstagram className="text-2xl text-orange-600" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/profile.php?id=61574784286298"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaFacebook className="text-2xl text-orange-600" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-bl from-gray-300 via-gray-100 to-gray-300 rounded-2xl shadow-lg p-6 md:p-8"
          variants={cardVariants}
        >
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {intl.formatMessage({ id: "contact.form.title" })}
          </h3>
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-semibold text-gray-900">
                      {intl.formatMessage({ id: "contact.form.nameLabel" })}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={intl.formatMessage({
                          id: "contact.form.namePlaceholder",
                        })}
                        {...field}
                        className="bg-white border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-semibold text-gray-900">
                      {intl.formatMessage({ id: "contact.form.phoneLabel" })}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={intl.formatMessage({
                          id: "contact.form.phonePlaceholder",
                        })}
                        {...field}
                        className="bg-white border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-semibold text-gray-900">
                      {intl.formatMessage({ id: "contact.form.emailLabel" })}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={intl.formatMessage({
                          id: "contact.form.emailPlaceholder",
                        })}
                        {...field}
                        className="bg-white border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-semibold text-gray-900">
                      {intl.formatMessage({ id: "contact.form.messageLabel" })}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder={intl.formatMessage({
                          id: "contact.form.messagePlaceholder",
                        })}
                        rows={6}
                        className="bg-white border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-700 hover:to-orange-500 text-white font-semibold py-6 text-lg transition-all"
                >
                  {isLoading
                    ? intl.formatMessage({ id: "contact.form.submitting" })
                    : intl.formatMessage({ id: "contact.form.submitButton" })}
                </Button>
              </motion.div>
            </form>
          </Form>
        </motion.div>
      </motion.div>
    </div>
  );
}
