import SvgTypo from "../SvgTypo/SvgTypo"
import IcRight from "@assets/ic_right.svg"
import IcEslint from "@assets/ic_eslint.svg"
import IcGitignore from "@assets/ic_gitignore.svg"
import IcYarnrc from "@assets/ic_yarnrc.svg"
import IcTsText from "@assets/ic_ts_text.svg"
import IcJsText from "@assets/ic_js_text.svg"
import IcPackageLock from "@assets/ic_package_lock.svg"
import IcReadme from "@assets/ic_readme.svg"
import IcTsBg from "@assets/ic_ts_bg.svg"

const FileSystemRemained = () => {
  return (
    <>
      <SvgTypo
        svg={<IcEslint />}
        value=".eslintrc.json"
        color="white-light"
        p="6px 0px 6px 20px"
      />
      <SvgTypo
        svg={<IcGitignore />}
        value=".gitignore"
        color="white-light"
        p="6px 0px 6px 20px"
      />
      <SvgTypo
        svg={<IcYarnrc />}
        value=".yarnrc.yml"
        color="white-light"
        p="6px 0px 6px 20px"
      />
      <SvgTypo svg={<IcTsText />} value="next-env.d.ts" p="6px 0px 6px 20px" />
      <SvgTypo
        svg={<IcJsText />}
        value="next.config.mjs"
        color="white-light"
        p="6px 0px 6px 20px"
      />
      <SvgTypo
        svg={<IcPackageLock />}
        value="package.json"
        color="white-light"
        p="6px 0px 6px 20px"
      />
      <SvgTypo
        svg={<IcReadme />}
        value="README.md"
        color="white-light"
        p="6px 0px 6px 20px"
      />
      <SvgTypo
        svg={<IcTsBg />}
        value="tsconfig.json"
        color="white-light"
        p="6px 0px 6px 20px"
      />
    </>
  )
}

export default FileSystemRemained
