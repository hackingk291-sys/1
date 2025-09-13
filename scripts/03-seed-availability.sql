-- Seed availability table with default time slots for the next 30 days

DO $$
DECLARE
    current_date DATE := CURRENT_DATE;
    end_date DATE := CURRENT_DATE + INTERVAL '30 days';
    time_slot TIME;
    day_of_week INTEGER;
BEGIN
    WHILE current_date <= end_date LOOP
        day_of_week := EXTRACT(DOW FROM current_date);
        
        -- Skip Sundays (0)
        IF day_of_week != 0 THEN
            -- Generate time slots based on day of week
            -- Weekdays: 9 AM - 7 PM, Saturdays: 9 AM - 5 PM
            FOR hour IN 9..(CASE WHEN day_of_week = 6 THEN 16 ELSE 18 END) LOOP
                -- Skip lunch hour (1 PM)
                IF hour != 13 THEN
                    -- Create 30-minute slots
                    FOR minutes IN 0..1 LOOP
                        time_slot := (hour || ':' || (minutes * 30) || ':00')::TIME;
                        
                        INSERT INTO availability (date, time_slot, available, max_appointments, current_appointments)
                        VALUES (current_date, time_slot, true, 1, 0)
                        ON CONFLICT (date, time_slot) DO NOTHING;
                    END LOOP;
                END IF;
            END LOOP;
        END IF;
        
        current_date := current_date + INTERVAL '1 day';
    END LOOP;
END $$;
