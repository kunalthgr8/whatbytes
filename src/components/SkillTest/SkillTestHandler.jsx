import React, { useState, useCallback } from "react";
import ModalForm from "./Form/ModalForm";

const SkillTestHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  return (
    <div className="bg-white border border-gray-200 flex gap-5 rounded-lg shadow-lg p-6 mb-5">
      {/* Title and Description */}
      <div className="self-center ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
          alt="HTML Icon"
          className="w-20 h-20"
        />
      </div>
      <div className="mb-4 self-center">
        <h2 className="text-lg font-bold text-gray-800">
          Hyper Text Markup Language
        </h2>
        <p className="text-gray-600 text-sm">
          Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
        </p>
      </div>

      {/* Update Button */}
      <div className="text-right self-center ">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-6 rounded transition duration-300 ease-in-out"
          onClick={toggleModal}
        >
          Update
        </button>
      </div>

      {/* Modal Form */}
      {isModalOpen && <ModalForm isOpen={isModalOpen} onClose={toggleModal} />}
    </div>
  );
};

export default SkillTestHeader;
