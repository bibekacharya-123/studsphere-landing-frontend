'use client';

import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export default function Modal({ isOpen, onClose, title, message }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-[90%] text-center relative transform transition-transform duration-400">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200 p-2 rounded-full hover:rotate-90"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h3 className="text-2xl font-bold mb-5 text-gray-900">{title}</h3>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">{message}</p>
        
        <button
          onClick={onClose}
          className="w-full max-w-56 mx-auto bg-blue-600 text-white py-3 px-8 rounded-xl font-semibold border-none cursor-pointer transition-all duration-400 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 shadow-blue-600/40"
        >
          Got It!
        </button>
      </div>
    </div>
  );
}