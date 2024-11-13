import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./splash/splash.module').then(m => m.SplashPageModule),
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./reset/reset.module').then(m => m.ResetPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then(m => m.VerificationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'select-location',
    loadChildren: () => import('./select-location/select-location.module').then(m => m.SelectLocationPageModule)
  },
  {
    path: 'list-of-pooler',
    loadChildren: () => import('./list-of-pooler/list-of-pooler.module').then(m => m.ListOfPoolerPageModule)
  },
  {
    path: 'pooling-confirmed',
    loadChildren: () => import('./pooling-confirmed/pooling-confirmed.module').then(m => m.PoolingConfirmedPageModule)
  },
  {
    path: 'pool-takers',
    loadChildren: () => import('./pool-takers/pool-takers.module').then(m => m.PoolTakersPageModule)
  },
  {
    path: 'pool-taker-info',
    loadChildren: () => import('./pool-taker-info/pool-taker-info.module').then(m => m.PoolTakerInfoPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./my-trips/my-trips.module').then(m => m.MyTripsPageModule)
  },
  {
    path: 'trip-info',
    loadChildren: () => import('./trip-info/trip-info.module').then(m => m.TripInfoPageModule)
  },
  {
    path: 'pool-info',
    loadChildren: () => import('./pool-info/pool-info.module').then(m => m.PoolInfoPageModule)
  },
  {
    path: 'ride-route',
    loadChildren: () => import('./ride-route/ride-route.module').then(m => m.RideRoutePageModule)
  },
  {
    path: 'trip-completed',
    loadChildren: () => import('./trip-completed/trip-completed.module').then(m => m.TripCompletedPageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./chats/chats.module').then(m => m.ChatsPageModule)
  },
  {
    path: 'conversation',
    loadChildren: () => import('./conversation/conversation.module').then(m => m.ConversationPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then(m => m.MyProfilePageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then(m => m.WalletPageModule)
  },
  {
    path: 'my-vehicles',
    loadChildren: () => import('./my-vehicles/my-vehicles.module').then(m => m.MyVehiclesPageModule)
  },
  {
    path: 'add-vehicles',
    loadChildren: () => import('./add-vehicles/add-vehicles.module').then(m => m.AddVehiclesPageModule)
  },
  {
    path: 'manage-address',
    loadChildren: () => import('./manage-address/manage-address.module').then(m => m.ManageAddressPageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./add-address/add-address.module').then(m => m.AddAddressPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then(m => m.SupportPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then(m => m.LanguagePageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then(m => m.FaqPageModule)
  },
  {
    path: 'buyappalert',
    loadChildren: () => import('./buyappalert/buyappalert.module').then(m => m.BuyappalertPageModule)
  },
  {
    path: 'vt-popup',
    loadChildren: () => import('./vt-popup/vt-popup.module').then(m => m.VtPopupPageModule)
  },
  {
    path: 'country-code',
    loadChildren: () => import('./country-code/country-code.module').then(m => m.CountryCodePageModule)
  },
  {
    path: 'start-ride',
    loadChildren: () => import('./start-ride/start-ride.module').then( m => m.StartRidePageModule)
  },
  {
    path: 'rate-ride-taker',
    loadChildren: () => import('./rate-ride-taker/rate-ride-taker.module').then( m => m.RateRideTakerPageModule)
  },
  {
    path: 'pool-taker-request',
    loadChildren: () => import('./pool-taker-request/pool-taker-request.module').then( m => m.PoolTakerRequestPageModule)
  },
  {
    path: 'ride-accepted',
    loadChildren: () => import('./ride-accepted/ride-accepted.module').then( m => m.RideAcceptedPageModule)
  },
  {
    path: 'send-to-bank',
    loadChildren: () => import('./send-to-bank/send-to-bank.module').then( m => m.SendToBankPageModule)
  },
  {
    path: 'add-money',
    loadChildren: () => import('./add-money/add-money.module').then( m => m.AddMoneyPageModule)
  },
  {
    path: 'bank-transfer',
    loadChildren: () => import('./bank-transfer/bank-transfer.module').then( m => m.BankTransferPageModule)
  },
  {
    path: 'transaction-success',
    loadChildren: () => import('./transaction-success/transaction-success.module').then( m => m.TransactionSuccessPageModule)
  },
  {
    path: 'security',
    loadChildren: () => import('./security/security.module').then( m => m.SecurityPageModule)
  },
  {
    path: 'get-help',
    loadChildren: () => import('./get-help/get-help.module').then( m => m.GetHelpPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then(m => m.VerificationPageModule)
  },
  {
    path: 'tabs/payment/airtime',
    loadChildren: () => import('./airtime/airtime.module').then(m => m.AirtimePageModule)
  },
  {
    path: 'tabs/payment/tv',
    loadChildren: () => import('./tv/tv.module').then(m => m.TVPageModule)
  },
  {
    path: 'tabs/payment/send-money',
    loadChildren: () => import('./send-money/send-money.module').then(m => m.SendMoneyPageModule)
  },
  {
    path: 'tabs/payment/electricity',
    loadChildren: () => import('./electricity/electricity.module').then(m => m.ElectricityPageModule)
  },
  {
    path: 'tabs/payment/lottery',
    loadChildren: () => import('./lottery/lottery.module').then(m => m.LotteryPageModule)
  },
  {
    path: 'tabs/payment/utility',
    loadChildren: () => import('./utility/utility.module').then(m => m.UtilityPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'select-location',
    loadChildren: () => import('./select-location/select-location.module').then(m => m.SelectLocationPageModule)
  },
  {
    path: 'list-of-pooler',
    loadChildren: () => import('./list-of-pooler/list-of-pooler.module').then(m => m.ListOfPoolerPageModule)
  },
  {
    path: 'pooling-confirmed',
    loadChildren: () => import('./pooling-confirmed/pooling-confirmed.module').then(m => m.PoolingConfirmedPageModule)
  },
  {
    path: 'pool-takers',
    loadChildren: () => import('./pool-takers/pool-takers.module').then(m => m.PoolTakersPageModule)
  },
  {
    path: 'pool-taker-info',
    loadChildren: () => import('./pool-taker-info/pool-taker-info.module').then(m => m.PoolTakerInfoPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./my-trips/my-trips.module').then(m => m.MyTripsPageModule)
  },
  {
    path: 'trip-info',
    loadChildren: () => import('./trip-info/trip-info.module').then(m => m.TripInfoPageModule)
  },
  {
    path: 'pool-info',
    loadChildren: () => import('./pool-info/pool-info.module').then(m => m.PoolInfoPageModule)
  },
  {
    path: 'ride-route',
    loadChildren: () => import('./ride-route/ride-route.module').then(m => m.RideRoutePageModule)
  },
  {
    path: 'trip-completed',
    loadChildren: () => import('./trip-completed/trip-completed.module').then(m => m.TripCompletedPageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./chats/chats.module').then(m => m.ChatsPageModule)
  },
  {
    path: 'conversation',
    loadChildren: () => import('./conversation/conversation.module').then(m => m.ConversationPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then(m => m.MyProfilePageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then(m => m.WalletPageModule)
  },
  {
    path: 'my-vehicles',
    loadChildren: () => import('./my-vehicles/my-vehicles.module').then(m => m.MyVehiclesPageModule)
  },
  {
    path: 'add-vehicles',
    loadChildren: () => import('./add-vehicles/add-vehicles.module').then(m => m.AddVehiclesPageModule)
  },
  {
    path: 'manage-address',
    loadChildren: () => import('./manage-address/manage-address.module').then(m => m.ManageAddressPageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./add-address/add-address.module').then(m => m.AddAddressPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then(m => m.SupportPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then(m => m.LanguagePageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then(m => m.FaqPageModule)
  },
  {
    path: 'buyappalert',
    loadChildren: () => import('./buyappalert/buyappalert.module').then(m => m.BuyappalertPageModule)
  },
  {
    path: 'vt-popup',
    loadChildren: () => import('./vt-popup/vt-popup.module').then(m => m.VtPopupPageModule)
  },
  {
    path: 'country-code',
    loadChildren: () => import('./country-code/country-code.module').then(m => m.CountryCodePageModule)
  }, 
  {
    path: 'start-ride',
    loadChildren: () => import('./start-ride/start-ride.module').then( m => m.StartRidePageModule)
  },
  {
    path: 'rate-ride-taker',
    loadChildren: () => import('./rate-ride-taker/rate-ride-taker.module').then( m => m.RateRideTakerPageModule)
  },
  {
    path: 'pool-taker-request',
    loadChildren: () => import('./pool-taker-request/pool-taker-request.module').then( m => m.PoolTakerRequestPageModule)
  },
  {
    path: 'ride-accepted',
    loadChildren: () => import('./ride-accepted/ride-accepted.module').then( m => m.RideAcceptedPageModule)
  },
  {
    path: 'send-to-bank',
    loadChildren: () => import('./send-to-bank/send-to-bank.module').then( m => m.SendToBankPageModule)
  },
  {
    path: 'add-money',
    loadChildren: () => import('./add-money/add-money.module').then( m => m.AddMoneyPageModule)
  },
  {
    path: 'verify-identity',
    loadChildren: () => import('./verify-identity/verify-identity.module').then( m => m.VerifyIdentityPageModule)
  },
  {
    path: 'add-money-account',
    loadChildren: () => import('./add-money-account/add-money-account.module').then( m => m.AddMoneyAccountPageModule)
  },
  {
    path: 'gift-card',
    loadChildren: () => import('./gift-card/gift-card.module').then( m => m.GiftCardPageModule)
  },
  {
    path: 'virtual-card',
    loadChildren: () => import('./virtual-card/virtual-card.module').then( m => m.VirtualCardPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
