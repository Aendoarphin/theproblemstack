export default function Footer() {
  return (
    <footer className="z-1 bg-primary text-center text-white text-xs p-4">
      <p>
        &copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_BRAND_NAME}.
        All rights reserved.
      </p>
    </footer>
  );
}
