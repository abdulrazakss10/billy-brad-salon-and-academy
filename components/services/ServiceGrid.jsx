import ServiceCard from './ServiceCard';

export default function ServiceGrid({ services }) {
  if (!services || services.length === 0) {
    return (
      <div className="py-20 text-center text-[#7a7a7a]">
        No services found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
