const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-800 hover:text-yellow-900 transition dark:text-yellow-500 dark:hover:text-yellow-600"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default ExternalLink;
