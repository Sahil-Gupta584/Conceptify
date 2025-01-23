'use client';
import { User } from 'next-auth';
import React, { useState, useRef, useEffect } from 'react';
import { logOut } from '../utils/actions';
import Image from 'next/image';
import Link from 'next/link';


function Avatar({ user }: { user: User | undefined }) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
console.log('user', user);

    document.addEventListener('mousedown', handleClickOutside);
  }, []);
  if (!user) return null
  return (
    <div className="relative inline-block" ref={popoverRef}>
      {/* Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative focus:outline-none"
      >
        <div className="w-10 h-10 rounded-full overflow-hidden hover:ring-2 hover:ring-blue-500 transition-all">
          <Image
            height={40}
            width={40}
            src={user.image as string}
            alt={user.name as string}
            className="w-full h-full object-cover"
          />
        </div>
      </button>

      {/* Popover */}
      {isOpen && user && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          {/* User Info Section */}
          <div className="p-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={user.image as string}
                  alt={user.name as string}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Actions Section */}
          <div className="border-t border-gray-200 p-2">
            <Link
              href="/feedback"
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md text-gray-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span>Give us feedback </span>
            </Link>
            <Link
              href="/feedback"
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md text-gray-700 transition-colors"
            >🆕 &nbsp;Request Feature
            </Link>

            <button
              onClick={async () => logOut()}
              className="w-full flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md text-red-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;