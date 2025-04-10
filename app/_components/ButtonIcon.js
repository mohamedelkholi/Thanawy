function ButtonIcon({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-none border-none p-[0.6rem] rounded-[var(--border-radius-sm)] transition-all duration-200 hover:bg-gray-100"
    >
      <svg
        className="w-[2.2rem] h-[2.2rem] text-[var(--color-brand-600)]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {children}
      </svg>
    </button>
  );
}

export default ButtonIcon;
