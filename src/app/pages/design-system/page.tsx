import React from "react";
import { Typographie } from "@/ui/design-system/Typographie";
import { Button } from "@/ui/design-system/Button";
import { Links } from "@/ui/design-system/Links";
import { CgArrowTopRight } from "react-icons/cg";
import { Inputs } from "@/ui/design-system/Inputs";
import { ImportantText } from "@/ui/design-system/ImportantText";
import { CtaScroll } from "@/ui/components/ctaScroll";
import NavBar from "@/ui/components/navigation/NavBar";

const page = () => {
  return (
    <>
     <NavBar/>
      <main className="p-4 w-full min-h-screen space-y-6 grid place-content-center">
        <Typographie
          textEffect="large"
          variant="display"
          theme="tercery"
          className="font-calfine"
        >
          Design System
        </Typographie>
        <div className="flex gap-10">
          <div>
            <fieldset className="p-4 border-2 border-primary w-fit">
              <legend className="ml-2">Typography</legend>
              <div className="space-y-3">
                <Typographie
                  variant="display"
                  className="font-druk"
                  weight="black"
                  component="h1"
                >
                  Display
                </Typographie>
                <Typographie variant="h1" component="h1">
                  H1
                </Typographie>
                <Typographie variant="h2" component="h1">
                  H2
                </Typographie>
                <Typographie variant="h3" component="h1">
                  H3
                </Typographie>
                <Typographie variant="h4" component="h1">
                  H4
                </Typographie>
                <Typographie variant="h5" component="h1">
                  H5
                </Typographie>
                <Typographie variant="h6" component="h1">
                  H6
                </Typographie>
                <Typographie variant="link" component="h1">
                  Links
                </Typographie>
                <Typographie variant="body-base" component="h1">
                  Body-base
                </Typographie>
                <Typographie variant="body-sm" component="h1">
                  Body-sm
                </Typographie>
              </div>
            </fieldset>
          </div>
          <div>
            <fieldset className="p-4 border-2 border-primary w-fit">
              <legend className="ml-2">Buttons</legend>
              <div className="flex gap-3 items-center">
                <Button>Click me</Button>
                <Button variant="outline">Click me</Button>
              </div>
            </fieldset>
            <fieldset className="p-4 border-2 border-primary w-fit">
              <legend className="ml-2">Links</legend>
              <div className="flex gap-3 items-center">
                <Links className="w-[150px]" variant="underline">
                  Instagram
                </Links>
                <Links>Link</Links>
                <Links variant="externe">
                  Link <CgArrowTopRight />
                </Links>
                <Links variant="footer">Link</Links>
              </div>
            </fieldset>
            <fieldset className="p-4 border-2 border-primary w-fit">
              <legend className="ml-2">Inputs</legend>
              <div className="flex gap-3 items-center">
                <Inputs
                  icon="/img/svg/nameInput.svg"
                  placeHolder="Enter un nom"
                  typeOfInput="text"
                  className="w-[200px]"
                />
              </div>
            </fieldset>
            <fieldset className="p-4 border-2 border-primary w-fit">
              <legend className="ml-2">Important text</legend>
              <div className="flex gap-3 items-center">
                <ImportantText img="/img/png/Wave-Marker.png">
                  <Typographie>Important Text</Typographie>
                </ImportantText>
                <ImportantText img="/img/png/Line-Marker.png">
                  <Typographie>Important Text</Typographie>
                </ImportantText>
                <ImportantText img="/img/png/Marker.png">
                  <Typographie>Cta scroll</Typographie>
                </ImportantText>
              </div>
            </fieldset>
            <fieldset className="p-4 border-2 border-primary w-fit">
              <legend className="ml-2">Cta Scroll</legend>
              <div className="flex gap-3 items-center">
                <CtaScroll variant="top" />
                <CtaScroll variant="contact" />
              </div>
            </fieldset>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
