import Loader from '@/components/common/Loader';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf8f5]">
      <Loader label="Loading" />
    </div>
  );
}
