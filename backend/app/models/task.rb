class Task < ApplicationRecord
  belongs_to :project, optional: true
  validates :title, presence: true
  validates :owner, presence: true
  attribute :done, :boolean, default: false
end
