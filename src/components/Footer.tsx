interface FooterProps {
  isRTL: boolean;
}

export function Footer({ isRTL }: FooterProps) {
  return (
    <footer className="px-6 py-6 bg-white text-center border-t">
      <p className="text-gray-600">
        {isRTL
          ? "© 2025 جميع الحقوق محفوظة. دريم هومز"
          : "© 2025 DreamHomes. All rights reserved."}
      </p>
      <p className="text-gray-600 mt-2">
        {isRTL ? (
          <>
            تم التطوير بواسطة{" "}
            <a
              href="https://muhammadhamzaismail.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              MHI
            </a>
          </>
        ) : (
          <>
            Build by{" "}
            <a
              href="https://muhammadhamzaismail.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              MHI
            </a>
          </>
        )}
      </p>
    </footer>
  );
}
