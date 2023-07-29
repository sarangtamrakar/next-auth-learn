import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Transition } from "@headlessui/react";

const HeadlessModal = ({ img_url, ImagePopup, setImagePopup }) => {
  return (
    <div>
      <Dialog
        open={ImagePopup?.isOpen}
        onClose={() =>
          setImagePopup({
            img_url: null,
            isOpen: false,
          })
        }
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded-3xl bg-gray-600 relative">
            {/* <Dialog.Title>Image</Dialog.Title> */}

            <Dialog.Description>
              <img
                className="w-full h-full rounded-3xl"
                src={ImagePopup?.img_url}
                alt="image popup"
              />

              <button
                type="button"
                className="absolute top-1 right-1"
                onClick={() =>
                  setImagePopup({
                    img_url: null,
                    isOpen: false,
                  })
                }
              >
                close
              </button>
            </Dialog.Description>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default HeadlessModal;
