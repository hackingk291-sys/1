-- Seed the services table with initial data

INSERT INTO services (service_id, name, description, duration_min, duration_max, price_from, category) VALUES
('sports-injury', 'Sports Injury Recovery', 'Specialized treatment for sports-related injuries with focus on getting you back to peak performance.', 45, 60, 150000, 'rehabilitation'),
('pain-management', 'Pain Management', 'Comprehensive pain relief strategies using modern techniques and personalized therapy plans.', 30, 45, 120000, 'treatment'),
('post-surgery', 'Post-Surgery Rehabilitation', 'Expert post-operative care to ensure optimal recovery and restore full functionality.', 60, 60, 180000, 'rehabilitation'),
('injury-prevention', 'Injury Prevention', 'Proactive programs designed to prevent injuries and maintain long-term physical health.', 45, 45, 100000, 'prevention'),
('geriatric', 'Geriatric Physiotherapy', 'Specialized care for elderly patients focusing on mobility, balance, and independence.', 45, 45, 130000, 'specialized'),
('manual-therapy', 'Manual Therapy', 'Hands-on treatment techniques to improve mobility and reduce pain effectively.', 30, 45, 140000, 'treatment'),
('neurological', 'Neurological Rehabilitation', 'Specialized treatment for neurological conditions and recovery.', 60, 60, 200000, 'specialized'),
('strength-conditioning', 'Strength & Conditioning', 'Fitness and strength training programs for optimal physical performance.', 45, 60, 110000, 'fitness')
ON CONFLICT (service_id) DO UPDATE SET
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    duration_min = EXCLUDED.duration_min,
    duration_max = EXCLUDED.duration_max,
    price_from = EXCLUDED.price_from,
    category = EXCLUDED.category,
    updated_at = CURRENT_TIMESTAMP;
