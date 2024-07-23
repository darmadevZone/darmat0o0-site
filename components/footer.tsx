export const darmaSiteInfo = {
  title: "DarmaT0o0 Site",
  description: "DarmaT0o0 Site",
  name: "DarmaT0o0",
  copylight: {
    name: "プライバシーについて",
    link: "",
  },
};

const Footer = () => {
  return (
    <footer className="container h-16 border-t">
      <div className="flex flex-col items-center p-2">
        <p>
          &copy; 2024
          <span className="p-2 underline">{darmaSiteInfo.name}</span>
        </p>
        <p> {darmaSiteInfo.copylight.name}</p>
      </div>
    </footer>
  );
};

export default Footer;
