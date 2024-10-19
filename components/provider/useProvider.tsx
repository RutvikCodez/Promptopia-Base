import { BuiltInProviderType } from "next-auth/providers/index";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
} from "next-auth/react";
import { useEffect, useState } from "react";

const useProviders = () => {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);
  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await getProviders();
        setProviders(response);
      } catch (error) {
        console.error("Error fetching providers.", error);
      }
    };
    fetchProviders();
  }, []);
  return providers;
};

export default useProviders;
