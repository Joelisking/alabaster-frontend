import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { TripTypePricing } from '@/lib/types';

interface Props {
  tripTypes: TripTypePricing[];
  defaultValue: string;
  setSelectedTripType: (tripTypeId: string) => void;
}
function TripTypeSelect({
  tripTypes,
  defaultValue,
  setSelectedTripType,
}: Props) {
  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={setSelectedTripType}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select trip type" />
      </SelectTrigger>
      <SelectContent>
        {tripTypes.map((tripType: TripTypePricing) => (
          <SelectItem
            key={tripType._key}
            value={tripType.tripType._id}>
            {tripType.tripType.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default TripTypeSelect;
