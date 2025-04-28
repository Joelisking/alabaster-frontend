import Container from '@/components/shared/container';
import Header from '@/components/shared/header';
import { Icon } from '@/components/ui';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { client } from '@/lib/sanity';
import { IVehicle } from '@/lib/types';
import Image from 'next/image';
import React from 'react';
import img from '@/public/looper-group.svg';
import Form from '@/components/vehicle-details/Form';
export const revalidate = 60;
async function getData(id: string) {
  const query = `
    *[_type == 'vehicle' && slug.current == '${id}'][0] {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  mainImage {
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  },
  galleryImages[] {
    ...,
    asset->{
      _id,
      url,
      metadata
    }
  },
  vehicleDetails {
    year,
    fuelType,
    seats
  },
  description,
  tripTypes[] {
    _key,
    tripType->{
      _id,
      name,
      description
    },
    price {
      currency,
      amount
    }
  },
  accessories[]->{
    _id,
    name,
    description
  },
  category->{
    _id,
    title,
    description
  },
  slug {
    current
  }
}`;
  const data = await client.fetch(query);
  return data;
}

async function VehicleDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fleet: IVehicle = await getData(slug);
  console.log('Fleet', fleet.title);
  return (
    <main>
      <Container>
        <Header title={fleet.title} />

        <section className="my-12 flex md:flex-row gap-20">
          <div className="w-2/3">
            <h3 className="text-2xl font-medium">Vehicle Details</h3>
            <div className="mt-4 bg-secondary rounded-2xl p-4">
              <div className="bg-white p-4">
                <p>{fleet.description}</p>
              </div>

              <div className="mt-6 grid grid-cols-4 gap-3">
                <div className="flex flex-col">
                  <div className="bg-black text-white text-center font-medium py-2">
                    Registration Year
                  </div>
                  <div className="text-center text-5xl p-8 bg-white font-extralight">
                    {fleet.vehicleDetails.year}
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="bg-black text-white text-center font-medium py-2">
                    Fuel Type
                  </div>
                  <div className="text-center text-5xl p-8 bg-white font-extralight capitalize">
                    {fleet.vehicleDetails.fuelType}
                  </div>
                </div>
                <div>
                  <div className="bg-black text-white text-center font-medium py-2">
                    Seats
                  </div>
                  <div className="text-center text-5xl p-8 bg-white font-extralight">
                    {fleet.vehicleDetails.seats}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-medium">Accessories</h3>
              <div className="rounded-2xl bg-secondary p-4 mt-5">
                <div className="flex flex-wrap gap-3">
                  {fleet.accessories?.map((accessory) => (
                    <div
                      className="bg-white px-3 py-2 rounded-xl flex gap-2 capitalize"
                      key={accessory._id}>
                      <Icon
                        name="ShieldCheck"
                        className="text-primary"
                      />
                      {accessory.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/3">
            <h3 className="text-2xl font-medium">Trip Type</h3>

            <Tabs
              defaultValue={fleet.tripTypes[0]?.tripType._id || ''}
              className="w-[400px]">
              <TabsList className="grid w-full grid-cols-2 gap-3">
                {fleet.tripTypes.map((tripType) => (
                  <TabsTrigger
                    key={tripType._key}
                    value={tripType.tripType._id}>
                    {tripType.tripType.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Background image container positioned outside the TabsContent */}
              <div className="relative mt-10">
                <div className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden z-20">
                  <Image
                    src={img}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>

                {fleet.tripTypes.map((type) => (
                  <TabsContent
                    value={type.tripType._id}
                    key={type._key}>
                    <div className="bg-card-foreground rounded-2xl px-9 pt-4 pb-8 relative z-10">
                      <span className="text-white text-sm">
                        {type.tripType.description}
                      </span>
                      <div className="flex flex-col mt-5">
                        <span className="text-primary text-5xl font-bold z-30">
                          {type.price.currency}
                          {type.price.amount}
                        </span>
                        <span className="text-white text-5xl font-bold">
                          /per day
                        </span>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </div>
            </Tabs>

            <div className="bg-card-foreground p-7 rounded-2xl mt-3">
              <span className="text-white text-2xl">
                Get in touch using the form below
              </span>

              <Form tripTypes={fleet.tripTypes} />
            </div>
          </div>
        </section>

        {/* <section className="mt-24">
          <Header title="Similar Cars" />
        </section> */}
      </Container>
    </main>
  );
}

export default VehicleDetails;
