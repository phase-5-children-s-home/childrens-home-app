class DonationsController < ApplicationController
   
    def create

        donation = Donation.create(donation_params)

        if donation.save
          app_response (message: "donations received successfully" status: :ok, data: donation)
        else
          app_response(message: "there was an error proccessing donation" status: :unprocessable_entity)
        end
      end
    
      private
    
      def donation_params
        params.permit(:amount, :ome, :user_id)
      end
    
end
