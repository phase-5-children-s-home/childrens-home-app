class DonationsController < ApplicationController
   
    def create

        donation = Donation.create(donation_params)

        if donation.save
          app_response(message: "Donations received successfully", status: :created, data: donation)
        else
          app_response(message: "There was an error proccessing donation", status: :unprocessable_entity, data: donation.errors)
        end
      end
    
      private
    
      def donation_params
        params.permit(:amount, :home_detail_id, :user_id, :payment_method, :name, :email)
      end
    
end
