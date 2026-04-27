"use client";

import { motion } from "framer-motion";
import { useMessages } from "@/lib/MessagesContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sendMail } from "@/lib/send-mail";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Declare gtag_report_conversion function type
declare global {
  interface Window {
    gtag_report_conversion?: (url: string) => boolean;
  }
}

interface CTASajtProps {
  selectedPaket?: string;
}

const CTASajt = ({ selectedPaket }: CTASajtProps) => {
  const intl = useMessages();
  const router = useRouter();

  const formSchema = z.object({
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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "", email: "", message: "" },
  });

  useEffect(() => {
    if (selectedPaket) {
      form.setValue("message", `Zainteresovan/a sam za: ${selectedPaket}`);
    }
  }, [selectedPaket, form]);

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const mailText = `Ime: ${values.name}\n Telefon: ${values.phone}\n Email: ${values.email}\n Poruka: ${values.message}`;
    const response = await sendMail({
      email: values.email,
      subject: "New Contact Us Form",
      text: mailText,
    });

    if (response?.messageId) {
      router.push(`/hvala`);
    } else {
      toast.error(intl.formatMessage({ id: "contact.toast.error" }));
    }
    form.reset();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div id="kontakt-forma" className="text-gray-50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-orange-500/20 rounded-2xl py-5 md:p-8 text-center">
      <div className="flex justify-center mb-5 md:mb-7">
        <motion.h2
          className="text-2xl md:text-4xl font-extrabold inline-block bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {intl.formatMessage({ id: "websiteDevelopment.cta.title" })}
        </motion.h2>
      </div>

      <motion.div
        className="grid md:grid-cols-5 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Leva kolona: rezultati + kontakt dugmad */}
        <motion.div
          className="md:col-span-3 md:space-y-8 md:px-10 text-left"
          variants={itemVariants}
        >
          <div>
            <h3 className="text-xl font-bold mb-1 text-center md:text-left">
              {intl.formatMessage({ id: "websiteDevelopment.cta.resultsTitle" })}
            </h3>
            <motion.ul
              className="space-y-1 md:space-y-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.li className="flex items-center" variants={itemVariants}>
                <motion.svg
                  className="w-5 h-5 mr-3 text-orange-600 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0zm-4.5 0a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM11 17a8 8 0 100-16 8 8 0 000 16z" />
                </motion.svg>
                {intl.formatMessage({ id: "websiteDevelopment.cta.result1" })}
              </motion.li>
              <motion.li className="flex items-center" variants={itemVariants}>
                <motion.svg
                  className="w-5 h-5 mr-3 text-orange-600 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                </motion.svg>
                {intl.formatMessage({ id: "websiteDevelopment.cta.result2" })}
              </motion.li>
              <motion.li className="flex items-center" variants={itemVariants}>
                <motion.svg
                  className="w-5 h-5 mr-3 text-orange-600 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <path d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" />
                </motion.svg>
                {intl.formatMessage({ id: "websiteDevelopment.cta.result3" })}
              </motion.li>
              <motion.li className="flex items-center" variants={itemVariants}>
                <motion.svg
                  className="w-5 h-5 mr-3 text-orange-600 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </motion.svg>
                {intl.formatMessage({ id: "websiteDevelopment.cta.result4" })}
              </motion.li>
            </motion.ul>
          </div>

          {/* Kontakt dugmad */}
          <motion.div
            className="flex flex-col gap-3 items-center md:items-start pt-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a
              href={`tel:${intl
                .formatMessage({ id: "websiteDevelopment.cta.phone" })
                .replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-orange-600 to-orange-400 text-white px-4 py-2 rounded-xl text-base md:text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (window.gtag_report_conversion) {
                  window.gtag_report_conversion(
                    `tel:${intl
                      .formatMessage({ id: "websiteDevelopment.cta.phone" })
                      .replace(/\s/g, "")}`
                  );
                }
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {intl.formatMessage({ id: "websiteDevelopment.cta.phone" })}
            </motion.a>

            <motion.a
              href="mailto:office@manikamwebsolutions.com"
              className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-orange-600 to-orange-400 text-white px-4 py-2 rounded-xl text-base md:text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              office@manikamwebsolutions.com
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Desna kolona: kontakt forma */}
        <motion.div
          className="md:col-span-2 bg-gray-950/60 border-l-4 border-orange-500 rounded-2xl shadow-xl p-4 md:p-5 text-left"
          variants={itemVariants}
        >
          <h3 className="text-base font-bold text-orange-400">
            {intl.formatMessage({ id: "websiteDevelopment.cta.contactTitle" })}
          </h3>
          <p className="text-gray-400 text-xs mb-3">
            {intl.formatMessage({ id: "websiteDevelopment.cta.contactSubtitle" })}
          </p>
          <Form {...form}>
            <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder={intl.formatMessage({
                          id: "contact.form.namePlaceholder",
                        })}
                        {...field}
                        className="bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500 text-sm h-9"
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
                    <FormControl>
                      <Input
                        placeholder={intl.formatMessage({
                          id: "contact.form.phonePlaceholder",
                        })}
                        {...field}
                        className="bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500 text-sm h-9"
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
                    <FormControl>
                      <Input
                        placeholder={intl.formatMessage({
                          id: "contact.form.emailPlaceholder",
                        })}
                        {...field}
                        className="bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500 text-sm h-9"
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
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder={intl.formatMessage({
                          id: "contact.form.messagePlaceholder",
                        })}
                        rows={4}
                        className="bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500 text-sm"
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
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-700 hover:to-orange-500 text-white font-semibold py-3 text-sm transition-all"
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
};

export default CTASajt;
