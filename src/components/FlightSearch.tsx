import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const FlightSearch = () => {
  const [tripType, setTripType] = useState("roundtrip");

  return (
    <section className="py-16 bg-slate-50" id="flights">
      <div className="max-w-6xl mx-auto px-4">
        <Card className="shadow-2xl border-0">
          <CardHeader className="bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-center font-montserrat">
              <Icon name="Search" size={24} className="inline mr-2" />
              Поиск авиабилетов
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {/* Trip Type Selection */}
            <div className="flex gap-4 mb-8">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="tripType"
                  value="roundtrip"
                  checked={tripType === "roundtrip"}
                  onChange={(e) => setTripType(e.target.value)}
                  className="text-sky-500"
                />
                <span>Туда и обратно</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="tripType"
                  value="oneway"
                  checked={tripType === "oneway"}
                  onChange={(e) => setTripType(e.target.value)}
                  className="text-sky-500"
                />
                <span>В одну сторону</span>
              </label>
            </div>

            {/* Search Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* From */}
              <div className="space-y-2">
                <Label htmlFor="from" className="text-slate-700 font-semibold">
                  Откуда
                </Label>
                <div className="relative">
                  <Icon
                    name="MapPin"
                    size={18}
                    className="absolute left-3 top-3 text-slate-400"
                  />
                  <Input
                    id="from"
                    placeholder="Москва (SVO)"
                    className="pl-10 h-12 border-slate-200 focus:border-sky-500"
                  />
                </div>
              </div>

              {/* To */}
              <div className="space-y-2">
                <Label htmlFor="to" className="text-slate-700 font-semibold">
                  Куда
                </Label>
                <div className="relative">
                  <Icon
                    name="MapPin"
                    size={18}
                    className="absolute left-3 top-3 text-slate-400"
                  />
                  <Input
                    id="to"
                    placeholder="Стамбул (IST)"
                    className="pl-10 h-12 border-slate-200 focus:border-sky-500"
                  />
                </div>
              </div>

              {/* Departure Date */}
              <div className="space-y-2">
                <Label
                  htmlFor="departure"
                  className="text-slate-700 font-semibold"
                >
                  Дата вылета
                </Label>
                <div className="relative">
                  <Icon
                    name="Calendar"
                    size={18}
                    className="absolute left-3 top-3 text-slate-400"
                  />
                  <Input
                    id="departure"
                    type="date"
                    className="pl-10 h-12 border-slate-200 focus:border-sky-500"
                  />
                </div>
              </div>

              {/* Return Date */}
              {tripType === "roundtrip" && (
                <div className="space-y-2">
                  <Label
                    htmlFor="return"
                    className="text-slate-700 font-semibold"
                  >
                    Дата возврата
                  </Label>
                  <div className="relative">
                    <Icon
                      name="Calendar"
                      size={18}
                      className="absolute left-3 top-3 text-slate-400"
                    />
                    <Input
                      id="return"
                      type="date"
                      className="pl-10 h-12 border-slate-200 focus:border-sky-500"
                    />
                  </div>
                </div>
              )}

              {/* Passengers */}
              <div className="space-y-2">
                <Label
                  htmlFor="passengers"
                  className="text-slate-700 font-semibold"
                >
                  Пассажиры
                </Label>
                <Select>
                  <SelectTrigger className="h-12 border-slate-200 focus:border-sky-500">
                    <Icon
                      name="Users"
                      size={18}
                      className="mr-2 text-slate-400"
                    />
                    <SelectValue placeholder="1 взрослый" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 взрослый</SelectItem>
                    <SelectItem value="2">2 взрослых</SelectItem>
                    <SelectItem value="3">3 взрослых</SelectItem>
                    <SelectItem value="4">4+ взрослых</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Class */}
              <div className="space-y-2">
                <Label htmlFor="class" className="text-slate-700 font-semibold">
                  Класс
                </Label>
                <Select>
                  <SelectTrigger className="h-12 border-slate-200 focus:border-sky-500">
                    <Icon
                      name="Crown"
                      size={18}
                      className="mr-2 text-slate-400"
                    />
                    <SelectValue placeholder="Эконом" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Эконом</SelectItem>
                    <SelectItem value="business">Бизнес</SelectItem>
                    <SelectItem value="first">Первый класс</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Search Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 px-12 py-3 text-lg font-semibold"
              >
                <Icon name="Search" size={20} className="mr-2" />
                Найти рейсы
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FlightSearch;
