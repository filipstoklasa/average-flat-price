import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.sreality.cz",
  headers: {
    "Content-Type": "application/json",
  },
});

const getSrealityFilters = (data: any) => {
  const filter: any = {};

  if (data.categoryFilter) filter.category_main_cb = data.categoryFilter;
  if (data.usableArea.some((item: any) => !!item)) {
    let area = data.usableArea;
    if (data.usableArea[0] && !data.usableArea[1]) {
      area = [data.usableArea[0], 10000000000];
    } else if (!data.usableArea[0] && data.usableArea[1]) {
      area = [0, data.usableArea[1]];
    }
    filter.usable_area = area.join("|");
  }
  if (data.flatFilter.type.length)
    filter.category_sub_cb = data.flatFilter.type.join("|");
  if (data.district) filter.locality_district_id = data.district.value;

  return filter;
};

class FilterURLSearchParams extends URLSearchParams {
  constructor(params: any) {
    super(params);
  }

  appendNewData(data: any) {
    Object.entries(data).forEach(([key, value]) => {
      this.append(key, value as string);
    });
    return this;
  }
}

export const getAveragePricePromise = async ({ body }: any, response: any) => {
  try {
    const filter = new FilterURLSearchParams({
      locality_country_id: "112", // Czech republic
      category_type_cb: "1",
      no_shares: 1,
      no_auction: 1,
      ownership: 1,
    })
      .appendNewData(getSrealityFilters(body))
      .toString();

    const res = await instance.get(
      `/api/cs/v2/estates?${decodeURIComponent(filter)}&per_page=999`
    );

    response.status(200).json({
      description: res.data.meta_description.split(".")?.[0],
      estates: res.data._embedded.estates.filter((item: any) => item.price > 1),
      averagePrice:
        res.data._embedded.estates.reduce(
          (acc: any, curr: any) => acc + curr.price,
          0
        ) / res.data._embedded.estates.length,
    });
  } catch (err) {
    response.status(500).json({ error: err });
  }
};
