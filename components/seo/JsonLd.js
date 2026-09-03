export default function JsonLd({ data }) {
  if (!data) return null;
  
  // If data is an array of schemas, render each or combined
  const jsonString = JSON.stringify(data);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}
