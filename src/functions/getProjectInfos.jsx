// Assets
// import gokce from "../assets/gokce.PNG";
import sloth from "../assets/sloth.PNG";
import derimod from "../assets/derimod.jpeg";
import blog from "../assets/blog.PNG";
import pop from "../assets/pop.PNG";
import country from "../assets/country.PNG";
import emre from "../assets/emre.PNG";
import purest from "../assets/purest.png";
import jumbo from "../assets/jumbo.png";
import karaca from "../assets/karaca.png";
import ilacsiz from "../assets/ilacsiz.png";

const getProjectInfos = (t) => {
  const projectInfo = [
    // {
    //   title: t("Project-1"),
    //   description: t("Project-1-1"),
    //   linksite: "https://gokcecbsharita.net/",
    //   image: gokce,
    //   disabled: true,
    // },
    {
      title: t("Project-11"),
      description: t("Project-11-1"),
      linksite: "https://derimod.com.tr/",
      image: derimod,
    },
    {
      title: t("Project-13"),
      description: t("Project-13-1"),
      linksite: "https://www.jumbo.com.tr/",
      image: jumbo,
    },
    {
      title: t("Project-14"),
      description: t("Project-14-1"),
      image: karaca,
    },
    {
      title: t("Project-12"),
      description: t("Project-12-1"),
      linksite: "https://thepurestsolutions.com/",
      image: purest,
    },
    {
      title: t("Project-15"),
      description: t("Project-15-1"),
      linksite: "https://www.ilacsizyasam.com/",
      image: ilacsiz,
    },
    {
      title: t("Project-2"),
      description: t("Project-2-1"),
      linksite: "https://slothbedding.com/",
      image: sloth,
    },
    {
      title: t("Project-3"),
      description: t("Project-3-1"),
      linksite: "https://emre-blog.vercel.app/",
      linkcode: "https://github.com/AEmre23/my-blog",
      image: blog,
    },
    {
      title: t("Project-4"),
      description: t("Project-4-1"),
      linksite: "https://popup-generator-emre.vercel.app/",
      linkcode: "https://github.com/AEmre23/popup-generator",
      image: pop,
    },
    {
      title: t("Project-10"),
      description: t("Project-10-1"),
      linksite: "https://www.emrealtunkaya.dev/",
      linkcode: "https://github.com/AEmre23/portfolio-website",
      image: emre,
    },
    {
      title: t("Project-5"),
      description: t("Project-5-1"),
      linksite: "https://countries-info-app-opal.vercel.app/",
      linkcode: "https://github.com/AEmre23/countries-info-app",
      image: country,
    },
  ];
  return projectInfo;
};

export { getProjectInfos };
