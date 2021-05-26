export interface IMedication {
  id?: string;
  identifier: string;
  status: string;
  status_reason?: string;
  category?: string;
  subject: string;
  context?: string;
  starting_time?: Date;
  end_time?: Date;
  date_asserted?: Date;
  information_source?: string;
  derived_from?: string;
  reason_code?: string;
  reason_reference?: string;
  note?: string;
  dosage?: string;
  medication: string;
  based_on?: string;
  part_of?: string;
}
