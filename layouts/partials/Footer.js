import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright } = config.params;
  return (
    <footer className="section bg-theme-dark">
      <div className="container text-center">
        {/* footer menu */}
        <ul className="mb-8 space-x-4">
          {menu.footer.map((menu) => (
            <li className="inline-block" key={menu.name}>
              <Link href={menu.url} className="p-4 text-light hover:text-white">
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
        <div>
        Chào mừng mọi người đến với website, <br/> Nơi chúng ta cũng nhau trải nghiệm những thứ hay ho nhất về những tựa game hot nhất hiện nay 🚀🚀
        </div>
        {/* social icons */}
        {/* <Social source={social} className="social-icons mb-8" /> */}
        {/* copyright */}
        {/* {markdownify(copyright, "p", "text-light")} */}
      </div>
    </footer>
  );
};

export default Footer;
