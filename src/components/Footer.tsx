
import React from "react";

function Footer() {
  const quickLinks = [
    ["Home", "#home"],
    ["About Us", "#about"],
    ["What We Do", "#what-we-do"],
    ["Our Impact", "#impact"],
    ["Contact", "#contact"],
  ];

  const contactInfo = [
    ["Email", "hello@helpinghands.org", "mailto:hello@helpinghands.org"],
    ["Phone", "+92 300 1234567", "tel:+923001234567"],
    ["Location", "Karachi, Pakistan", ""],
  ];

  const socialLinks = ["Facebook", "Instagram", "LinkedIn"];

  return (
    <footer className="bg-gray-200 items-center gap-10 px-10 md:px-20">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 justify-between">

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-900">
              {quickLinks.map(([name, link]) => (
                <li key={name}>
                  <a href={link} className="transition">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:justify-self-end">
            <h3 className="text-lg font-semibold">Get In Touch</h3>

            <ul className="mt-5 space-y-4 text-sm text-gray-500">
              {contactInfo.map(([label, value, link]) => (
                <li key={label}>
                  <span className="block text-gray-500">{label}</span>

                  {link ? (
                    <a href={link} className="transition">
                      {value}
                    </a>
                  ) : (
                    <span>{value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

          <p className="text-sm text-gray-500">
            © 2026 Khawab. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            {socialLinks.map((social) => (
              <a key={social} href="#" className="transition">
                {social}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;

