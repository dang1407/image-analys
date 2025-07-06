// import ApiUrl from '@/constants/ApiUrl';
// import AuthenticationDTO from '@/dtos/adminitrations/AuthenticationDTO';
// import adm_feature from '@/entities/authentications/adm_feature';
// import { ApiService } from '@/utils/ApiService';
// import LocalStorageService from '@/utils/LocalStorageService';
// import { useEffect } from 'react';

// export default function LeftMenu() {
//     useEffect(() => {
//     const getUserMenu = async () => {
//       try {
//         const response = await ApiService.get<AuthenticationDTO>(ApiUrl.GetUserMenu, "");
//         LocalStorageService.setFeatureData(response.ListFeatures);
//         return response.ListFeatures;
//       } catch (ex) {
//         console.log(ex)
//       }
//     }
//     const featureDataString = LocalStorageService.getFeatureData();
//     let featureData: adm_feature[];
//     if(featureDataString){
//       featureData = JSON.parse(featureDataString);
//     } else {
//       featureData = getUserMenu();
//     }
//   })
//   return (
//     <div>
//       LeftMenu
//     </div>
//   )
// }
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import adm_feature from '@/entities/authentications/adm_feature';
import { useEffect, useState } from 'react';
import ApiUrl from '@/constants/ApiUrl';
import AuthenticationDTO from '@/dtos/adminitrations/AuthenticationDTO';
import { ApiService } from '@/utils/ApiService';
import LocalStorageService from '@/utils/LocalStorageService';
import { useHandleError } from '@/hooks/useHandleError';


export function LeftMenu() {
  const [featureData, setFeatureData] = useState<adm_feature[]>([]);
  const errorHandler = useHandleError();
  useEffect(() => {
    const getUserMenu = async () => {
      try {
        const response = await ApiService.get<AuthenticationDTO>(ApiUrl.GetUserMenu, "");
        LocalStorageService.setFeatureData(response.ListFeatures);
        setFeatureData(response.ListFeatures ?? []);
        return response.ListFeatures;
      } catch (ex) {
        errorHandler(ex as Error)
      }
    }
    const featureDataString = LocalStorageService.getFeatureData();
    if (featureDataString) {
      setFeatureData(JSON.parse(featureDataString));
    } else {
      getUserMenu();
    }
  }, [errorHandler])
  // Tách menu cha và con
  const parentItems = featureData.filter(item => item.parent_id === undefined);
  const childItems = featureData.filter(item => item.parent_id !== undefined);

  // Nhóm các menu con theo parent_id
  const childItemsByParent = childItems.reduce<Record<number, adm_feature[]>>((acc, item) => {
    if (item.parent_id) {
      if (!acc[item.parent_id]) {
        acc[item.parent_id] = [];
      }
      acc[item.parent_id].push(item);
    }
    return acc;
  }, {});

  return (
    <div className="flex flex-col space-y-2 p-4 bg-gray-100 w-64">
      {parentItems.map(parent => (
        <div key={parent.feature_id} className="relative group">
          {childItemsByParent[parent.feature_id ?? 0] ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-start">
                  {parent.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48" align="start">
                {childItemsByParent[parent.feature_id ?? 0].map(child => (
                  <DropdownMenuItem key={child.feature_id}>
                    {child.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="ghost" className="w-full justify-start">
              {parent.name}
            </Button>
          )}
        </div>
      ))}
    </div>
  );
}