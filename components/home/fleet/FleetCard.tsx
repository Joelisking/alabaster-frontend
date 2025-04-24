import Image, { StaticImageData } from 'next/image';

interface Props {
  img: string | StaticImageData;
  name: string;
  vehicleType: string;
  tripType: string;
  fuelType: string;
  year: number;
  seats: number;
  minimumCost: number;
  maximumCost: number;
}

interface FleetProps {
  data: Props;
}
function FleetCard({ data }: FleetProps) {
  return (
    <div className="rounded-xl p-4 border border-border shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="bg-secondary p-4 rounded-xl">
        <Image src={data.img} alt="Fleet Image 1" />
      </div>

      <div className="mt-4">
        <p className="font-semibold text-xl">{data.name},</p>
        <p className="font-semibold text-xl">
          {data.vehicleType} - {data.tripType}
        </p>
      </div>

      <div className="flex gap-2 capitalize mt-3">
        <span className="bg-secondary py-1 px-4 rounded">
          {data.fuelType}
        </span>
        <span className="bg-secondary py-1 px-4 rounded">
          {data.year}
        </span>
        <span className="bg-secondary py-1 px-4 rounded">
          {data.seats} seats
        </span>
      </div>

      <div className="mt-5">
        <span className="bg-secondary font-extrabold py-1 px-4 rounded text-xl">
          <span>GHC{data.minimumCost}</span>
          <span> - </span>
          <span>GHC{data.maximumCost}</span>
        </span>
      </div>
    </div>
  );
}

export default FleetCard;
