import React, { useState, useCallback } from "react";
import ModalForm from "./Form/ModalForm";

const SkillTestHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Title and Description */}
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
          alt="HTML Icon"
          className="w-8 h-8"
        />
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Hyper Text Markup Language
        </h2>
        <p className="text-gray-600">
          Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
        </p>
      </div>

      {/* Update Button */}
      <div className="text-right">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-300 ease-in-out"
          onClick={toggleModal}
        >
          Update Scores
        </button>
      </div>

      {/* Modal Form */}
      {isModalOpen && <ModalForm isOpen={isModalOpen} onClose={toggleModal} />}
    </div>
  );
};

export default SkillTestHeader;
